// Middlewares Import
import CatchAsync from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import ApiFeatures from '../utils/apiFeatures.js';
import authToken from '../utils/authToken.js';

// Database Model Imports 
import AdminAuth from '../model/admin/AdminAuth.js';
import Auth from '../model/auth/Auth.js';


// 1) Super Admin: Admin Role modification by Super Admin
export const nestNotify_Super_Admin_Permission_Modify_Of_Admin = CatchAsync( async(req, res, next)=>{
    
    const adminExist = await AdminAuth.findById(req.params.id)

    if(!adminExist){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(201).json({
        success: true,
        status: "success",
        message: "Permission modified",
    })
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



// // 1) Super Admin: Search
// export const nestNotify_Super_Admin_Search_Feature = CatchAsync( async(req, res, next)=>{

//     const searchResult = await Auth.find().search(req.query)

//     if(!searchResult){
//         return next(new ErrorHandler(`Search result not found.`, 401))
//     }
    
//     return res.status(200).json({
//         success: true,
//         status: "success",
//         message: "Search result",
//         searchResult
//     })
// })
