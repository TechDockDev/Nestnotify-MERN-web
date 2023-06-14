import CatchAsync from '../middleware/catchAsync.js';
import SellerForm from '../model/seller/SellerForm.js';
import SellerResidentialForm from '../model/seller/SellerResidentialHomeForm.js';
import SellerResidentialCondoForm from '../model/seller/SellerResidentialCondo.js';
import SellerCommercialForm from '../model/seller/SellerCommercialForm.js';
import ErrorHandler from '../utils/errorHandler.js';
import ApiFeatures from '../utils/apiFeatures.js';


// 1) -----| ADMIN: GET ALL QUESTIONS |-----
export const nestNotify_Admin_Get_All_Questions = CatchAsync( async(req, res)=>{
    res.status(200).json({
        success: true,
        message: "All available questions"
    })
})



// 2) -----| ADMIN: GET SELLER PROPERTY FORM |-----
export const nestNotify_Admin_Get_Seller_Property_Form = CatchAsync( async(req, res, next)=>{
    const sellerPropertyForm = await SellerForm.find().sort({quesIndex: 0});
    
    if(!sellerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        message: "Seller Form Data",
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})



// 3) -----| ADMIN: GET SELLER RESIDENTIAL HOME PROPERTY FORM |-----
export const nestNotify_Admin_Get_Seller_Residential_Home_Form = CatchAsync( async(req, res, next)=>{
    
    // const sellerPropertyForm = await SellerResidentialForm.find().sort({quesIndex: 0});

    const resultPerPage = 5;
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



// 4) -----| ADMIN: GET SELLER RESIDENTIAL CONDO PROPERTY FORM |-----
export const nestNotify_Admin_Get_Seller_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    // const sellerPropertyForm = await SellerResidentialCondoForm.find().sort({quesIndex: 0});

    const resultPerPage = 5;
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



// 5) -----| ADMIN: GET SELLER PROPERTY FORM |-----
export const nestNotify_Admin_Get_Seller_Commercial_Property_Form = CatchAsync( async(req, res, next)=>{
   
    // const sellerPropertyForm = await SellerCommercialForm.find().sort({quesIndex: 0});

    const resultPerPage = 5;
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



// 6) -----| ADMIN: SUFFLE FORM QUESTIONS |-----
export const nestNotify_Admin_Suffle_Property_Form = CatchAsync( async(req, res, next)=>{

    // (Left) Requires:- Form Id, [[Ques ID, Index Vale], [Ques ID, Index Vale], [Ques ID, Index Vale],.....] for suffling

    res.status(200).json({
        success: true,
        message: "Forms Questions Suffle"
    })
})



// -----| Question Post |-----
export const nestNotify_Admin_Post_Questions = CatchAsync( async(req, res, next)=>{
    // console.log(req.body)
    // const sellerPropertyForm = await SellerForm.create(req.body);
    if(!req.body){
        return res.status(201).json({
            success: false,
            message: "Provide proper details"
        })
    }
    // const sellerPropertyForm = await SellerResidentialForm.create(req.body)
    const sellerPropertyForm = await SellerForm.create(req.body)
    res.status(201).json({
        success: true,
        message: "Questions Post",
        sellerPropertyForm
    })
})