// Middlewares Import
import CatchAsync from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import ApiFeatures from '../utils/apiFeatures.js';

// Database Model Imports 
import SellerPropertyQues from '../model/SellerPropertyQues.js';
import SellerResidentialHomeForm from '../model/questionnaires/SellerResidentialHomeQues.js';
import SellerResidentialCondoForm from '../model/questionnaires/SellerResidentialCondoQues.js';
import SellerCommercialForm from '../model/questionnaires/SellerCommercialQues.js';
import SellerPropertyAns from '../model/seller/SellerPropertyAns.js';


// ==============================================================================================
// Seller Property Form
// ==============================================================================================

// 1) SELLER: GET NEW PROPERTY FORM 
export const nestNotify_Seller_Get_Property_Form = CatchAsync( async(req, res, next)=>{

    // const resultPerPage = 3;
    // const propertyQuesCount = await SellerPropertyQues.countDocuments()

    // const apiFeature = new ApiFeatures(SellerPropertyQues.find(), req.query).pagination(resultPerPage)
    // const sellerPropertyForm = await apiFeature.query;

    const sellerPropertyForm = await SellerPropertyQues.find().sort({quesIndex: 0})
    
    if(!sellerPropertyForm){
        return next(new ErrorHandler(`Something went wrong, Please try again.`), 404)
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Seller new property form",
        // propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})
// 2) SELLER: FILL NEW PROPERTY FORM 
export const nestNotify_Seller_Fill_New_Property_Form = CatchAsync( async(req, res, next)=>{

    // console.log(req.body)

    const anss = req.body
    for(let i =0; i< anss.length; i++){
        console.log(anss[i])
    }

    const answerFill = await SellerPropertyAns.create({
        auth: req.auth.id,
        formAns: req.body.formAns
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: "New Property form filled",
        answerFill
    })
})

// 3) SELLER: GET FILLED SELLER PROPERTY FORM 
export const nestNotify_Seller_Get_Filled_New_Property_Form = CatchAsync( async(req, res, next)=>{

    const answerFill = await SellerPropertyAns.find()
    .populate({path: 'formAns.sellerpropertyques',
        select: { 'question': 1},
    })

    // Object.values(answerFill).map((data)=>{
    //     console.log("1------>",data)
    // })

    res.status(200).json({
        success: true,
        status: "success",
        message: "New Property form filled",
        length: answerFill.length,
        answerFill
    })
})


// ==============================================================================================
// Seller Residential Home Form
// ==============================================================================================

// 4) SELLER: GET NEW RESIDENTIL HOME FORM 
export const nestNotify_Seller_Get_Residential_Home_Form = CatchAsync( async(req, res, next)=>{

    // const resultPerPage = 3;
    // const propertyQuesCount = await SellerResidentialHomeForm.countDocuments()

    // const apiFeature = new ApiFeatures(SellerResidentialHomeForm.find(), req.query).pagination(resultPerPage)
    // const sellerPropertyForm = await apiFeature.query;

    const sellerPropertyForm = await SellerResidentialHomeForm.find().sort({quesIndex: 0})

    if(!sellerPropertyForm){
        return next(new ErrorHandler(`Something went wrong, Please try again.`), 404)
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Seller Residential home property form",
        propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})

// 4) SELLER: FILL NEW RESIDENTIAL HOME FORM 
export const nestNotify_Seller_Fill_New_Residential_Home_Form = CatchAsync( async(req, res, next)=>{

    console.log(req.body)

    res.status(200).json({
        success: true,
        message: "New Residential home Property form filled",
    })
})





//--------------------------------------------------------------------------------------------------------------------------------------------------------//

// 5) SELLER: FILL NEW PROPERTY FORM 
export const nestNotify_Seller_Fill_New_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    console.log(req.body)

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
        status: "success",
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
        status: "success",
        message: "Seller Commercail property form",
        propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})

//--------------------------------------------------------------------------------------------------------------------------------------------------------//