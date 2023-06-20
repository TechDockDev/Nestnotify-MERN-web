// Middlewares Import
import CatchAsync from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import ApiFeatures from '../utils/apiFeatures.js';
import authToken from '../utils/authToken.js';


// DataBase imports
import Auth from '../model/auth/Auth.js';
import UserAccount from '../model/users/UserAccount.js'


// User Profile
export const nestNotify_Get_User_Profile_data = CatchAsync(async (req, res, next) => {

    const user = await Auth.findById({ _id: req.auth.id })

    if (!user) {
        return next(new ErrorHandler('Somwthing went wrong', 404))
    }

    res.status(200).json({
        status: 'success',
        success: true,
        message: 'User Profile Data',
        user
    })
})


// User Profile: Personal Information Update
export const nestNotify_User_Profile_Personal_Data_Update = CatchAsync(async (req, res, next) => {

    const { firstName, lastName, email, contactNumber, secondaryContact, dateOfBirth } = req.body

    const userExist = await Auth.findById({ _id: req.auth.id })

    if (!userExist) {
        return next(new ErrorHandler('Something went wrong', 404))
    }

    // Checking Email Address 
    const emailExist = await Auth.find({email: email})
    if (emailExist.length>0 && req.body.email!==userExist.email) {
        return next(new ErrorHandler('Email address already exist', 400))
    }

    // Checking Primary Contact Number   
    const primaryContactExist = await Auth.find({contactNumber: contactNumber})
    const secondaryContactExist = await Auth.find({secondaryContact: contactNumber})
    if (primaryContactExist.length>0 && req.body.contactNumber!==userExist.contactNumber || secondaryContactExist.length>0 && req.body.contactNumber!==userExist.secondaryContact) {
        return next(new ErrorHandler('Primary contact number already exist', 400))
    }

    const userProfile = await Auth.findByIdAndUpdate(
        {
            _id: req.auth.id
        },
        {
            firstName: req.body.firstName,
            lastName: req.body.firstName,
            email: req.body.email,
            contactNumber: req.body.contactNumber,
            secondaryContact: req.body.secondaryContact,
            dateOfBirth: req.body.dateOfBirth
        },
        {
            new: true,
            runValidators: true,
            userFindAndModify: true
        }
    )

    res.status(200).json({
        status: 'success',
        success: true,
        message: 'User Profile Information Update',
        userProfile
    })
})


// User Profile: Personal Information Update
export const nestNotify_User_Profile_Address_Data_Update = CatchAsync(async (req, res, next) => {


    const userExist = await Auth.findById({ _id: req.auth.id })

    if (!userExist) {
        return next(new ErrorHandler('Somwthing went wrong', 404))
    }

    const userProfile = await UserAccount.findByIdAndUpdate(
        { _id: req.auth.id },
        {
            auth: req.auth.id,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            zipCode: req.body.zipCode
        },
        {
            new: true,
            runValidators: true,
            userFindAndModify: true
        }
    )

    // Saving Account reference in User Auth Model
    userExist.userAccount = userProfile._id
    await userExist.save()

    res.status(200).json({
        status: 'success',
        success: true,
        message: 'User Profile Information Update',
        userProfile
    })
})