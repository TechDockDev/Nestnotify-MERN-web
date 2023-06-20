// Middlewares Import
import CatchAsync from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import ApiFeatures from '../utils/apiFeatures.js';

// Database Model Imports 
import Auth from '../model/auth/Auth.js';


// 1) Super Admin: Search
export const nestNotify_Super_Admin_Search_Feature = CatchAsync( async(req, res, next)=>{

    const searchResult = await Auth.find().search(req.query)

    if(!searchResult){
        return next(new ErrorHandler(`Search result not found.`, 401))
    }
    
    return res.status(200).json({
        success: true,
        status: "success",
        message: "Search result",
        searchResult
    })
})


// 2) Super Admin: User Role modification by Super Admin
export const nestNotify_Super_Admin_Create_Admin_Account = CatchAsync( async(req, res, next)=>{
    
    const {firstName, lastName, email, contactNumber, role, password } = req.body

    const userEmailExist = await Auth.findOne({email: req.body.email})
    const userContactExist = await Auth.findOne({contactNumber: req.body.contactNumber })

    if(userEmailExist || userContactExist){
        return next(new ErrorHandler(`User email and contact number already exist.`, 401))
    }

    if(req.body.role.toString().toLowerCase()!=='admin'){
        return next(new ErrorHandler(`Something went wrong.`, 401))
    }

    const auser = await Auth.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        role: req.body.role,
        password: req.body.password
    })

    const adminUser = await Auth.findById({_id: auser._id})

    return res.status(201).json({
        success: true,
        status: "success",
        message: "Admin registered",
        adminUser
    })
})


// 2) Super Admin: User Role modification by Super Admin
export const nestNotify_Super_Admin_User_Role_Change = CatchAsync( async(req, res, next)=>{
    
    const userRoleChangeID = req.params.id

    const userToChangeExist = await Auth.findById({_id: userRoleChangeID})

    if(!userToChangeExist){
        return next(new ErrorHandler(`User doesn't exist`, 401))
    }

    const roleCheck = req.body.role

    if(roleCheck==="admin" || roleCheck==="user"){
        const modifiedUser = await Auth.findByIdAndUpdate(
            {
                _id: userToChangeExist._id
            }, 
            { 
                role: req.body.role
            },
            {  
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
            )
            return res.status(201).json({
                success: true,
                status: "success",
                message: 'User role modified',
                Name: modifiedUser.firstName+" "+modifiedUser.lastName,
                modifiedUserRole: modifiedUser.role
            })

    } 
    else{
        return next(new ErrorHandler(`Role can't be modified`, 401))
    }
})


// 3) Super Admin: User Account Delete
export const nestNotify_Super_Admin_User_Account_Delete = CatchAsync( async(req, res, next)=>{
    
    const userRoleChangeID = req.params.id

    const userToChangeExist = await Auth.findById({_id: userRoleChangeID})

    if(!userToChangeExist){
        return next(new ErrorHandler(`User doesn't exist`, 401))
    }

    const accountDeleted = await Auth.findByIdAndDelete(req.params.id)

    return res.status(201).json({
        success: true,
        message: `"${accountDeleted.firstName+" "+accountDeleted.lastName}" account deleted.`,
    })

})


// 4) Super Admin: Get Differernt Users
export const nestNotify_Super_Admin_Get_All_Users = CatchAsync( async(req, res, next) =>{

    const allUsers = await Auth.find({master: null})

    if(!allUsers){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }
    res.status(200).json({
        success: true,
        status: "success",
        message: `All Users List`,
        length: allUsers.length,
        allUsers
    })
})


// 5)Super Admin: Get All Admins account
export const nestNotify_Super_Admin_Get_All_Admins = CatchAsync( async(req, res, next) =>{

    const allAdmins = await Auth.find({role: "admin", master: null})

    if(!allAdmins){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: `All Admins`,
        length: allAdmins.length,
        allAdmins
    })
})

// 6) Super Admin: Get Sellers
export const nestNotify_Super_Admin_Get_All_Sellers = CatchAsync( async(req, res, next) =>{

    const allSellers = await Auth.find({role: "seller", master: null})

    if(!allSellers){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: `All Sellers`,
        length: allSellers.length,
        allSellers
    })
})


// 7) Super Admin: Get Buyers
export const nestNotify_Super_Admin_Get_All_Buyers = CatchAsync( async(req, res, next) =>{

    const allBuyers = await Auth.find({role: "buyer", master: null})

    if(!allBuyers){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: `All Buyers`,
        length: allBuyers.length,
        allBuyers
    })
})

// 8) Super Admin: Get Renters
export const nestNotify_Super_Admin_Get_All_Renters = CatchAsync( async(req, res, next) =>{
    const allRenters = await Auth.find({role: "renter", master: null})

    if(!allRenters){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: `All Renters`,
        length: allRenters.length,
        allRenters
    })
})


// 9) Super Admin: Get LandLords
export const nestNotify_Super_Admin_Get_All_LandLords = CatchAsync( async(req, res, next) =>{

    const allLandLords = await Auth.find({role: "landlord", master: null})

    if(!allLandLords){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: `All Landlords`,
        length: allLandLords.length,
        allLandLords
    })
})


// 10) Super Admin: Investors
export const nestNotify_Super_Admin_Get_All_Invetors = CatchAsync( async(req, res, next) =>{

    const allInvestors = await Auth.find({role: "invester", master: null})

    if(!allInvestors){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: `All investers`,
        length: allInvestors.length,
        allInvestors
    })
})


// 11) Super Admin: Get Single User
export const nestNotify_Super_Admin_Single_User_Profile = CatchAsync( async(req, res, next) =>{

    if(!req.params.id){
        return next(new ErrorHandler(`Something wrong, Please try again.`, 404))
    }

    const userProfile = await Auth.find({_id: req.params.id})

    if(!userProfile){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: `User List`,
        userProfile
    })
})