// Middlewares Import
import CatchAsync from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import ApiFeatures from '../utils/apiFeatures.js';

// Database Model Imports 
import SellerForm from '../model/propertyQuesModels/SellerForm.js';
import SellerResidentialForm from '../model/propertyQuesModels/SellerResidentialHomeForm.js';
import SellerResidentialCondoForm from '../model/propertyQuesModels/SellerResidentialCondoForm.js';
import SellerCommercialForm from '../model/propertyQuesModels/SellerCommercialForm.js';


//--------------------------------------------------------------------------------------------------------------------------------------------------------//

// 1) SELLER: FILL NEW PROPERTY FORM 
export const nestNotify_Seller_Fill_New_Property_Form = CatchAsync( async(req, res, next)=>{

    res.status(200).json({
        success: true,
        message: "New Property form filled",
    })
})
// 2) SELLER: GET NEW PROPERTY FORM 
export const nestNotify_Seller_Get_Property_Form = CatchAsync( async(req, res, next)=>{

    const resultPerPage = 3;
    const propertyQuesCount = await SellerForm.countDocuments()

    const apiFeature = new ApiFeatures(SellerForm.find(), req.query).pagination(resultPerPage)
    const sellerPropertyForm = await apiFeature.query;
    
    if(!sellerPropertyForm){
        return next(new ErrorHandler(`Something went wrong, Please try again.`), 404)
    }

    res.status(200).json({
        success: true,
        message: "Seller new property form",
        propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})


//--------------------------------------------------------------------------------------------------------------------------------------------------------//

// 3) SELLER: FILL NEW PROPERTY FORM 
export const nestNotify_Seller_Fill_New_Residential_Home_Form = CatchAsync( async(req, res, next)=>{

    res.status(200).json({
        success: true,
        message: "New Residential home Property form filled",
    })
})
// 4) SELLER: GET NEW PROPERTY FORM 
export const nestNotify_Seller_Get_Residential_Home_Form = CatchAsync( async(req, res, next)=>{

    const resultPerPage = 3;
    const propertyQuesCount = await SellerResidentialForm.countDocuments()

    const apiFeature = new ApiFeatures(SellerResidentialForm.find(), req.query).pagination(resultPerPage)
    const sellerPropertyForm = await apiFeature.query;

    if(!sellerPropertyForm){
        return next(new ErrorHandler(`Something went wrong, Please try again.`), 404)
    }

    res.status(200).json({
        success: true,
        message: "Seller Residential home property form",
        propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})


//--------------------------------------------------------------------------------------------------------------------------------------------------------//

// 5) SELLER: FILL NEW PROPERTY FORM 
export const nestNotify_Seller_Fill_New_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    res.status(200).json({
        success: true,
        message: "New Residential Condo Property form filled",
    })
})
// 6) SELLER: GET NEW PROPERTY FORM 
export const nestNotify_Seller_Get_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    const resultPerPage = 3;
    const propertyQuesCount = await SellerResidentialCondoForm.countDocuments()

    const apiFeature = new ApiFeatures(SellerResidentialCondoForm.find(), req.query).pagination(resultPerPage)
    const sellerPropertyForm = await apiFeature.query;

    if(!sellerPropertyForm){
        return next(new ErrorHandler(`Something went wrong, Please try again.`), 404)
    }

    res.status(200).json({
        success: true,
        message: "Seller Residential condo property form",
        propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})


//--------------------------------------------------------------------------------------------------------------------------------------------------------//

// 7) SELLER: FILL NEW PROPERTY FORM 
export const nestNotify_Seller_Fill_New_Commercial_Industrial_Form = CatchAsync( async(req, res, next)=>{

    res.status(200).json({
        success: true,
        message: "New Commercail Property form filled",
    })
})
// 8) SELLER: GET NEW PROPERTY FORM 
export const nestNotify_Seller_Get_Commercial_Industrial_Form = CatchAsync( async(req, res, next)=>{

    const resultPerPage = 3;
    const propertyQuesCount = await SellerCommercialForm.countDocuments()

    const apiFeature = new ApiFeatures(SellerCommercialForm.find(), req.query).pagination(resultPerPage)
    const sellerPropertyForm = await apiFeature.query;

    if(!sellerPropertyForm){
        return next(new ErrorHandler(`Something went wrong, Please try again.`), 404)
    }

    res.status(200).json({
        success: true,
        message: "Seller Commercail property form",
        propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})

//--------------------------------------------------------------------------------------------------------------------------------------------------------//