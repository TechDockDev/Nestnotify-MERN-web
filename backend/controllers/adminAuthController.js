// Module Import
import crypto from 'crypto';

// MiddleWares Import
import CatchAsync from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import authToken from '../utils/authToken.js';
import sendEmail from '../utils/sendEmail.js';

// Database Import
import AdminAuth from '../model/admin/AdminAuth.js';
import Auth from '../model/auth/Auth.js';



// -----| USER REGISTRATION |-----
export const nestNotify_Admin_Registration_By_Super_Admin = CatchAsync( async(req, res, next)=>{
    const { firstName, lastName, email, password, contactNumber, master, adminRole, adminPermission } = req.body;

    const permissions = ['account, seller, buyer, renters, landlords, investers, contactus']

    if(!master){
        req.body.master = null
    }
    else if(master.toLowerCase()==='super'){
        req.body.adminPermission = permissions;
        req.body.adminRole = 'Super Admin'
    }

    // 1) Checking if all field enterend
    if(!firstName || !lastName || !email || !password || !contactNumber || !adminRole || !adminPermission){
        return next(new ErrorHandler("Please provide all details"), 400)
    }

    // 2) Checking if user exist with same email address and contact numner
    const userExistanceCheck = await Auth.findOne({email: email});
    const contactExistanceCheck = await Auth.findOne({contactNumber: contactNumber})
    const adminExistanceCheck = await AdminAuth.findOne({email: email});
    const adminContactExistanceCheck = await AdminAuth.findOne({contactNumber: contactNumber})

    if(userExistanceCheck || adminExistanceCheck){
        return next(new ErrorHandler(`User Already exist with same email address. Please, try with new one.`), 400)
    }

    if(contactExistanceCheck || adminContactExistanceCheck){
        return next(new ErrorHandler(`User Already exist with same contact number. Please, try with new one.`), 400)
    }

    // 3) User registration in database
    const userCreate = await AdminAuth.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        password: req.body.password,
        master: req.body.master,
        adminRole: req.body.adminRole,
        adminPermission: req.body.adminPermission
    })

    // 4) Fetching User Data
    const adminAuth = await AdminAuth.findById({_id: userCreate._id})

    // 5) Sending response 
    res.status(201).json({
        success: true,
        status: "success",
        message: "Admin Registration Successful",
        adminAuth
    })

    // 5) Setting cookie and sending response
    // authToken.adminSendToken(adminAuth, 200, res, 'register');
})

// -----| ADMIN USER SIGNIN |-----
export const nestNotify_Admins_Users_Sign_IN = CatchAsync( async(req, res, next)=>{
    const {email, password} = req.body;
    // console.log(req.body)

    // 1) Checking if email and password
    if(!email || !password){
        return next(new ErrorHandler(`Please enter email and password`, 400))
    }

    // 2) Checking if user exist
    const adminCheck  = await AdminAuth.findOne({email}).select("+password");
    // console.log(userCheck.email)

    // 3) Checking password are same or not
    if(!adminCheck || !await adminCheck.correctPassword(password, adminCheck.password)){
        return next(new ErrorHandler('Invalid Credential', 401))
    }

    // 4) Fetching User data
    const admin = await AdminAuth.findById({_id: adminCheck._id})

    // 5) Setting cookie and sending reponse
    authToken.adminSendToken(admin, 200, res, 'login')
})


// -----| USER LOGOUT |-----
export const nestNotify_Admin_Users_Sign_Out = CatchAsync(async(req, res, next) => {
    
    const name = req.auth.firstName+" "+req.auth.lastName
    // 1) Setting cookie null
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    // 2) Sending response
    res.status(200).json({
        success: true,
        status: "success",
        message: `${name}, You are logged out.`
    })
})


// -----| Admin: Get Logged in user profile |-----
export const nestNotify_Admin_Get_Profile_Data = CatchAsync(async(req, res, next) => {

    // 1) Fetching user
    const adminProfile = await AdminAuth.findById({_id: req.auth.id})
    
    // Checking for error
    if(!adminProfile){
        return next(new ErrorHandler('Something went wrong', 400))
    }

    // Sending response
    res.status(200).json({
        status: 'success',
        success: true,
        messgae: "Admin Proifle Data",
        adminProfile
    })

})


// -----| USER PASSWORD UPDATE |-----
export const nestNotify_User_Password_Update = CatchAsync(async(req, res, next) => {

    // 1) Fetching user
    const auth = await AdminAuth.findById(req.auth.id).select('+password');
    
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
    const auth = await AdminAuth.findOne({email: req.body.email})
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

    const auth = await AdminAuth.findOne({
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