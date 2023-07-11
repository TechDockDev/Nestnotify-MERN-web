import CatchAsync from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import authToken from '../utils/authToken.js';
import crypto from 'crypto';
import sendEmail from '../utils/sendEmail.js';

// Database Import
import Auth from '../model/auth/Auth.js';


// -----| USER REGISTRATION |-----
export const nestNotify_User_Registration = CatchAsync( async(req, res, next)=>{
    const { firstName, lastName, email, password, contactNumber, role } = req.body;

    if(!role){
        req.body.role="user"
    }

    // 1) Checking if all field enterend
    if(!firstName || !lastName || !email || !password || !contactNumber){
        return next(new ErrorHandler("Please provide all details"), 400)
    }

    // 2) Checking if user exist with same email address
    const userExistanceCheck = await Auth.findOne({email: email});
    const contactExistanceCheck = await Auth.findOne({contactNumber: contactNumber})

    if(userExistanceCheck){
        return next(new ErrorHandler(`User Already exist with same email address. Please, try with new one.`), 400)
    }

    if(contactExistanceCheck){
        return next(new ErrorHandler(`User Already exist with same contact number. Please, try with new one.`), 400)
    }

    // 3) User registration in database
    const userCreate = await Auth.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        password: req.body.password,
        role: req.body.role.toLowerCase()
    })

    // 4) Fetching User Data
    const auth = await Auth.findById({_id: userCreate._id})

    // 5) Setting cookie and sending response
    authToken.sendToken(auth, 200, res, 'register');
})

// -----| USER SIGNIN |-----
export const nestNotify_User_SignIn = CatchAsync( async(req, res, next)=>{
    const {email, password} = req.body;
    // console.log(req.body)

    let userCheck;
    // 1) Checking if email and password
    if(!email || !password){
        return next(new ErrorHandler(`Please enter email and password`, 400))
    }

    // 2) Checking if user exist
    userCheck  = await Auth.findOne({email}).select("+password");
    // console.log(userCheck.email)

    // 3) Checking password are same or not
    if(!userCheck || !await userCheck.correctPassword(password, userCheck.password)){
        return next(new ErrorHandler('Invalid Credential', 401))
    }

    // 4) Fetching User data
    const auth = await Auth.findById({_id: userCheck._id})

    // 5) Setting cookie and sending reponse
    authToken.sendToken(auth, 200, res, 'login')
})


// -----| USER LOGOUT |-----
export const nestNotify_User_SignOut = CatchAsync(async(req, res, next) => {
    
    // 1) Setting cookie null
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    // 2) Sending response
    res.status(200).json({
        success: true,
        status: "success",
        message: 'You are logged out.'
    })
})


// -----| USER PASSWORD UPDATE |-----
export const nestNotify_User_Password_Update = CatchAsync(async(req, res, next) => {

    // 1) Fetching user
    const auth = await Auth.findById(req.auth.id).select('+password');
    
    // 2) Checking saved and provided password are save or not 
    const ispasswordMatch = await auth.correctPassword(req.body.oldPassword, auth.password);
    
    if(!ispasswordMatch){
        return next(new ErrorHandler('Old password is incorrect', 400))
    }

    // console.log(req.body)

    // 3) Checking if new password and old password are same or not
    if(req.body.newPassword !== req.body.confirmPassword){
        return next(new ErrorHandler('Password not matched.', 400))
    }
    auth.password = req.body.newPassword;
    await auth.save();

    // Sending cookie and response
    authToken.sendToken(auth, 200, res, 'passwordchange')
})


// -----| USER PASSWORD FORGOT |-----
export const nestNotify_User_Password_Forgot = CatchAsync(async(req, res, next)=>{
    // 1) Fetching user
    const auth = await Auth.findOne({email: req.body.email})
    // console.log(user)

    if(!auth){
        return next(new ErrorHandler("User not found", 404));
    }

    // 2) Get ResetPasswordToken
    const resetToken = await auth.getResetPasswordToken();
    await auth.save({validateBeforeSave: false});
    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/user/password/reset/${resetToken}`;
    const message = `Your password reset token is:- \n\n ${resetPasswordUrl}, \n\n If you have not request this email then please ignore it.`;

    try{
        await sendEmail({
            email: auth.email,
            subject: 'NestNotify Account Password Reset',
            message,
        })
        res.status(200).json({
            success: true,
            message: `Email sent to ${auth.email} successfully`
        })
    } catch(err){
        auth.resetPasswordToken = undefined;
        auth.resetPasswordExpire = undefined;
        await auth.save({validateBeforeSave: false});
        return next(new ErrorHandler(err.message, 500))
    }
})

// -----| USER PASSWORD RESET |-----
export const nestNotify_User_Password_Reset = CatchAsync(async(req, res, next)=>{
    
    // Creating token hash
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

    const auth = await Auth.findOne({
        resetPasswordToken,
        resetPasswordExpire: {$gt: Date.now()}
    })

    if(!auth){
        return next(new ErrorHandler("Reset password token is invalid or has been expired", 404));
    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler("Password doesn't matched.", 404));
    }

    auth.password = req.body.password;
    auth.resetPasswordToken = undefined;
    auth.resetPasswordExpire = undefined;

    await auth.save()
    authToken.sendToken(auth, 200, res, 'reset')
})