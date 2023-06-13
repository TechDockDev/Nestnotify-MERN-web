import CatchAsync from '../../middleware/catchAsync.js';
import ErrorHandler from '../../utils/errorHandler.js';
import authToken from '../../utils/authToken.js';
import User from '../../model/user/user.js';


// -----| USER REGISTRATION |-----
export const nestNotify_User_Registration = CatchAsync( async(req, res)=>{
    const { firstName, lastName, email, password, contactNumber } = req.body;

    // 1) Checking if all field enterend
    if(!firstName || !lastName || !email || !password || !contactNumber){
        return next(new ErrorHandler("Please provide all details"), 400)
    }

    // 2) Checking if user exist with same email address
    const userExistanceCheck = await User.findOne({email});

    if(userExistanceCheck){
        return next(new ErrorHandler(`User Already exist with same email address, Please try new one.`), 400)
    }

    // 3) User registration in database
    const userCreate = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        password: req.body.password
    })

    // 4) Fetching User Data
    const user= await User.findById({_id: userCreate._id})

    // 5) Setting cookie and sending response
    authToken.sendToken(user, 200, res);
})

// -----| USER SIGNIN |-----
export const nestNotify_User_SignIn = CatchAsync( async(req, res)=>{
    const {email, password} = req.body;
    // console.log(req.body)

    let userCheck;
    // 1) Checking if email and password
    if(!email || !password){
        return next(new ErrorHandler(`Please enter email and password`, 400))
    }

    // 2) Checking if user exist
    userCheck  = await User.findOne({email}).select("+password");
    console.log(userCheck.email)

    // 3) Checking password are same or not
    if(!userCheck || !await userCheck.correctPassword(password, userCheck.password)){
        return next(new ErrorHandler('Invalid email and password', 401))
    }

    // 4) Fetching User data
    const user= await User.findById({_id: userCheck._id})

    // 5) Setting cookie and sending reponse
    authToken.sendToken(user, 200, res)
})

// -----| USER LOGOUT |-----
export const nestNotify_User_SignOut = CatchAsync(async(req, res) => {
    
    // 1) Setting cookie null
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    // 2) Sending response
    res.status(200).json({
        success: true,
        message: 'Logged Out.'
    })
})


// -----| USER PASSWORD RESET |-----


// -----| USER PASSWORD FORGOT |-----


// -----| USER PASSWORD RESET |-----


// -----| USER ROLE CHANGE BY ADMIN |-----