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
import SellerFormsAns from '../model/seller/SellerFormsAns.js';


// ==============================================================================================
// Seller Property Form
// ==============================================================================================

// 1) SELLER: GET NEW PROPERTY FORM 
export const nestNotify_Seller_Get_Property_Form = CatchAsync( async(req, res, next)=>{

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

    const sellerPropertyForm = await SellerResidentialHomeForm.find().sort({quesIndex: 0})

    if(!sellerPropertyForm){
        return next(new ErrorHandler(`Something went wrong, Please try again.`), 404)
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Seller Residential home property form",
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})

// 5) SELLER: FILL NEW RESIDENTIAL HOME FORM 
export const nestNotify_Seller_Fill_New_Residential_Home_Form = CatchAsync( async(req, res, next)=>{

    const anss = req.body
    for(let i =0; i< anss.length; i++){
        console.log(anss[i])
    }

    const answerFill = await SellerFormsAns.create({
        auth: req.auth.id,
        formAns: req.body.formAns
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: "New Residential Home Property form filled",
        answerFill
    })
})


// 6) SELLER: GET FILLED SELLER PROPERTY FORM 
export const nestNotify_Seller_Get_Filled_Residential_Home_Form = CatchAsync( async(req, res, next)=>{

    const answerFill = await SellerFormsAns.find()
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
// Seller Residential Condo Form
// ==============================================================================================

// 7) SELLER: GET NEW PROPERTY FORM 
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

// 8) SELLER: FILL NEW PROPERTY FORM 
export const nestNotify_Seller_Fill_New_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{
    const anss = req.body
    for(let i =0; i< anss.length; i++){
        console.log(anss[i])
    }

    const answerFill = await SellerFormsAns.create({
        auth: req.auth.id,
        formAns: req.body.formAns
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: "New Residential Home Property form filled",
        answerFill
    })
})


// 9 SELLER: GET FILLED SELLER PROPERTY FORM 
export const nestNotify_Seller_Get_Filled_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    const answerFill = await SellerFormsAns.find()
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
// Seller Commercial Industrial Form
// ==============================================================================================

// 10) SELLER: GET NEW PROPERTY FORM 
export const nestNotify_Seller_Get_Commercial_Industrial_Form = CatchAsync( async(req, res, next)=>{

    const sellerPropertyForm = await SellerCommercialForm.find().sort({created: 0})

    if(!sellerPropertyForm){
        return next(new ErrorHandler(`Something went wrong, Please try again.`), 404)
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Seller Commercail property form",
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})


// 11) SELLER: FILL NEW PROPERTY FORM 
export const nestNotify_Seller_Fill_New_Commercial_Industrial_Form = CatchAsync( async(req, res, next)=>{

    const anss = req.body
    for(let i =0; i< anss.length; i++){
        console.log(anss[i])
    }

    const answerFill = await SellerFormsAns.create({
        auth: req.auth.id,
        formAns: req.body.formAns
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: "New Residential Home Property form filled",
        answerFill
    })
})



// 12) SELLER: GET FILLED SELLER PROPERTY FORM 
export const nestNotify_Seller_Get_Filled_Commercial_Industrial_Form = CatchAsync( async(req, res, next)=>{

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