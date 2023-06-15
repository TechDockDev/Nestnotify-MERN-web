// Middlewares Import
import CatchAsync from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import ApiFeatures from '../utils/apiFeatures.js';

// Database Model Imports 
import Auth from '../model/auth/Auth.js';
import SellerForm from '../model/propertyQuesModels/SellerForm.js';
import SellerResidentialForm from '../model/propertyQuesModels/SellerResidentialHomeForm.js';
import SellerResidentialCondoForm from '../model/propertyQuesModels/SellerResidentialCondoForm.js';
import SellerCommercialForm from '../model/propertyQuesModels/SellerCommercialForm.js';


/*
    SUPER ADMIN CONTROLLER
*/

// 1) Super Admin: User Role modification by Super Admin
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
            {   new: true,
                runValidators: true,
                userFindAndModify: true}
            )
            return res.status(201).json({
                success: true,
                message: 'User role modified',
                Name: modifiedUser.firstName+" "+modifiedUser.lastName,
                modifiedUserRole: modifiedUser.role
            })

    } 
    else{
        return next(new ErrorHandler(`Role can't be modified`, 401))
    }

})


// 2) Super Admin: User Account Delete
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


/*
    ADMIN CONTROLLER
*/

// 1) Admin: Seller property resgistration Form
export const nestNotify_Admin_Get_Seller_Property_Form = CatchAsync( async(req, res, next)=>{
    
    // const sellerPropertyForm = await SellerForm.find().sort({quesIndex: 0});

    const resultPerPage = 3;
    const propertyQuesCount = await SellerForm.countDocuments()

    const apiFeature = new ApiFeatures(SellerForm.find(), req.query).pagination(resultPerPage)
    const sellerPropertyForm = await apiFeature.query;

    if(!sellerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        message: "Seller New Property Form",
        propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})



// 2) Admin: Get Seller residetnial home Form
export const nestNotify_Admin_Get_Seller_Residential_Home_Form = CatchAsync( async(req, res, next)=>{
    
    // const sellerPropertyForm = await SellerResidentialForm.find().sort({quesIndex: 0});

    const resultPerPage = 3;
    const propertyQuesCount = await SellerResidentialForm.countDocuments()

    const apiFeature = new ApiFeatures(SellerResidentialForm.find(), req.query).pagination(resultPerPage)
    const sellerPropertyForm = await apiFeature.query;

    if(!sellerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        message: "Seller Form Data",
        propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})



// 3) Admin: Get Seller Residential Condo Form
export const nestNotify_Admin_Get_Seller_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    // const sellerPropertyForm = await SellerResidentialCondoForm.find().sort({quesIndex: 0});

    const resultPerPage = 3;
    const propertyQuesCount = await SellerResidentialCondoForm.countDocuments()

    const apiFeature = new ApiFeatures(SellerResidentialCondoForm.find(), req.query).pagination(resultPerPage)
    const sellerPropertyForm = await apiFeature.query;

    if(!sellerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        message: "Seller Form Data",
        propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})



// 4) Admin: Get Seller Commercial Form
export const nestNotify_Admin_Get_Seller_Commercial_Property_Form = CatchAsync( async(req, res, next)=>{
   
    // const sellerPropertyForm = await SellerCommercialForm.find().sort({quesIndex: 0});

    const resultPerPage = 3;
    const propertyQuesCount = await SellerCommercialForm.countDocuments()

    const apiFeature = new ApiFeatures(SellerCommercialForm.find(), req.query).pagination(resultPerPage)
    const sellerPropertyForm = await apiFeature.query;

    if(!sellerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        message: "Seller Form Data",
        propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})



// 5) -> Admin: Suffle form
export const nestNotify_Admin_Suffle_Property_Form = CatchAsync( async(req, res, next)=>{

    // (Left) Requires:- Form Id, [[Ques ID, Index Vale], [Ques ID, Index Vale], [Ques ID, Index Vale],.....] for suffling

    res.status(200).json({
        success: true,
        message: "Forms Questions Suffle"
    })
})


// -----| Question Post |-----
export const nestNotify_Admin_Post_Questions = CatchAsync( async(req, res, next)=>{

    if(!req.body){
        return res.status(201).json({
            success: false,
            message: "Provide proper details"
        })
    }
    // const sellerPropertyForm = await SellerForm.create(req.body)
    // const sellerPropertyForm = await SellerResidentialForm.create(req.body)
    // const sellerPropertyForm = await SellerResidentialCondoForm.create(req.body)
    const sellerPropertyForm = await SellerCommercialForm.create(req.body)

    res.status(201).json({
        success: true,
        message: "Questions Post",
        sellerPropertyForm
    })
})