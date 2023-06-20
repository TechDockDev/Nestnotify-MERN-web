// Middlewares Import
import CatchAsync from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import ApiFeatures from '../utils/apiFeatures.js';

// Database Model Imports 
// import Auth from '../model/auth/Auth.js';
import SellerForm from '../model/propertyQuesModels/SellerForm.js';
import SellerResidentialForm from '../model/propertyQuesModels/SellerResidentialHomeForm.js';
import SellerResidentialCondoForm from '../model/propertyQuesModels/SellerResidentialCondoForm.js';
import SellerCommercialForm from '../model/propertyQuesModels/SellerCommercialForm.js';

import BuyerResidentialHomeForm from '../model/buyers/BuyerResidentialHomeForm.js';
import BuyerResidentialCondoForm from '../model/buyers/BuyerResidentailCondoForm.js';
import BuyerCommercialForm from '../model/buyers/BuyerCommercialForm.js';



// ==============================================================================================
// Questionnaire forms
// ==============================================================================================


// Admin: Get Seller Property Registration Form
export const nestNotify_Admin_Get_Seller_Property_Form = CatchAsync( async(req, res, next)=>{

    const sellerPropertyForm = await SellerForm.find().sort({quesIndex: 0})

    // const resultPerPage = 3;
    // const propertyQuesCount = await SellerForm.countDocuments()

    // const apiFeature = new ApiFeatures(SellerForm.find(), req.query).pagination(resultPerPage)
    // const sellerPropertyForm = await apiFeature.query;

    if(!sellerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Seller New Property Form",
        // propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})

// Admin: Seller Questionnaire Types


// Admin: Get Seller Residetnial Home Form (Single Questionnaire)
export const nestNotify_Admin_Get_Seller_Residential_Home_Form = CatchAsync( async(req, res, next)=>{
    
    const sellerPropertyForm = await SellerResidentialForm.find().sort({quesIndex: 0});

    // const resultPerPage = 3;
    // const propertyQuesCount = await SellerResidentialForm.countDocuments()

    // const apiFeature = new ApiFeatures(SellerResidentialForm.find(), req.query).pagination(resultPerPage)
    // const sellerPropertyForm = await apiFeature.query;

    if(!sellerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Seller Form Data",
        // propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})



// Admin: Get Seller Residential Condo Form (Single Questionnaire)
export const nestNotify_Admin_Get_Seller_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    const sellerPropertyForm = await SellerResidentialCondoForm.find().sort({quesIndex: 0});

    // const resultPerPage = 3;
    // const propertyQuesCount = await SellerResidentialCondoForm.countDocuments()

    // const apiFeature = new ApiFeatures(SellerResidentialCondoForm.find(), req.query).pagination(resultPerPage)
    // const sellerPropertyForm = await apiFeature.query;

    if(!sellerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Seller Form Data",
        // propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})



// Admin: Get Seller Commercial Form (Single Questionnaire)
export const nestNotify_Admin_Get_Seller_Commercial_Property_Form = CatchAsync( async(req, res, next)=>{
   
    const sellerPropertyForm = await SellerCommercialForm.find().sort({quesIndex: 0});

    // const resultPerPage = 5;
    // const propertyQuesCount = await SellerCommercialForm.countDocuments()

    // const apiFeature = new ApiFeatures(SellerCommercialForm.find(), req.query).pagination(resultPerPage)
    // const sellerPropertyForm = await apiFeature.query;

    if(!sellerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Seller Form Data",
        // propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})


// ==============================================================================================
// shuffle Seller forms
// ==============================================================================================

// Admin: shuffle Seller Property Form
export const nestNotify_Admin_Shuffle_Seller_Property_Form = CatchAsync( async(req, res, next)=>{

    const sCF = await SellerForm.countDocuments()
    console.log(sCF)
    console.log(req.body.length)
    if(req.body.length!==sCF){
        return next(new ErrorHandler('Something wrong in form', 401))
    }

    Object.entries(req.body).forEach(async (data)=>{
        const qID = data[1].quesID
        await SellerForm.findByIdAndUpdate({_id: qID}, 
                    {quesIndex: data[1].quesIndex},
                    {
                        new: true,
                        runValidators: true,
                        userFindAndModify: true
                    })
    })

    return res.status(200).json({
        success: true,
        status: "success",
        message: `Seller Commercail Form shuffled`,
    })
})

// Admin: shuffle Seller Form Residential Home
export const nestNotify_Admin_Shuffle_Seller_Residential_Home_Form = CatchAsync( async(req, res, next)=>{

    const sCF = await SellerResidentialForm.countDocuments()
    if(req.body.length!==sCF){
        return next(new ErrorHandler('Something wrong in form', 401))
    }

    Object.entries(req.body).forEach(async (data)=>{
        const qID = data[1].quesID
        await SellerResidentialForm.findByIdAndUpdate({_id: qID}, 
                    {quesIndex: data[1].quesIndex},
                    {
                        new: true,
                        runValidators: true,
                        userFindAndModify: true
                    })
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: `Seller Commercail Form shuffled`,
    })
})


// Admin: shuffle Seller Residentail Condo Form 
export const nestNotify_Admin_Shuffle_Seller_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    const sCF = await SellerResidentialCondoForm.countDocuments()
    if(req.body.length!==sCF){
        return next(new ErrorHandler('Something wrong in form', 401))
    }

    Object.entries(req.body).forEach(async (data)=>{
        const qID = data[1].quesID
        await SellerResidentialCondoForm.findByIdAndUpdate({_id: qID}, 
                    {quesIndex: data[1].quesIndex},
                    {
                        new: true,
                        runValidators: true,
                        userFindAndModify: true
                    })
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: `Seller Commercail Form shuffled`,
    })
})

// Admin: shuffle Seller Residentail Condo Form 
export const nestNotify_Admin_Shuffle_Seller_Commercail_Form = CatchAsync( async(req, res, next)=>{

    const sCF = await SellerCommercialForm.countDocuments()
    if(req.body.length!==sCF){
        return next(new ErrorHandler('Something wrong in form', 401))
    }

    Object.entries(req.body).forEach(async (data)=>{
        const qID = data[1].quesID
        await SellerCommercialForm.findByIdAndUpdate({_id: qID}, 
                    {quesIndex: data[1].quesIndex},
                    {
                        new: true,
                        runValidators: true,
                        userFindAndModify: true
                    })
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: `Seller Commercail Form shuffled`,
    })
})



// ==============================================================================================
// shuffle Buyer Forms
// ==============================================================================================

// Admin: shuffle Buyer Residential Home Form
export const nestNotify_Admin_Shuffle_Buyer_Residentail_Home_Form = CatchAsync( async(req, res, next)=>{

    const sCF = await BuyerResidentialHomeForm.countDocuments()
    if(req.body.length!==sCF){
        return next(new ErrorHandler('Something wrong in form', 401))
    }

    Object.entries(req.body).forEach(async (data)=>{
        const qID = data[1].quesID
        await BuyerResidentialHomeForm.findByIdAndUpdate({_id: qID}, 
                    {quesIndex: data[1].quesIndex},
                    {
                        new: true,
                        runValidators: true,
                        userFindAndModify: true
                    })
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: `Seller Commercail Form shuffled`,
    })
})

// Admin: shuffle Buyer Residential Condo
export const nestNotify_Admin_Shuffle_Buyer_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    const sCF = await BuyerResidentialCondoForm.countDocuments()
    if(req.body.length!==sCF){
        return next(new ErrorHandler('Something wrong in form', 401))
    }

    Object.entries(req.body).forEach(async (data)=>{
        const qID = data[1].quesID
        await BuyerResidentialCondoForm.findByIdAndUpdate({_id: qID}, 
                    {quesIndex: data[1].quesIndex},
                    {
                        new: true,
                        runValidators: true,
                        userFindAndModify: true
                    })
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: `Seller Commercail Form shuffled`,
    })
})

// Admin: shuffle Seller Commercail Form
export const nestNotify_Admin_Shuffle_Buyer_Commercail_Form = CatchAsync( async(req, res, next)=>{

    const sCF = await BuyerCommercialForm.countDocuments()
    if(req.body.length!==sCF){
        return next(new ErrorHandler('Something wrong in form', 401))
    }

    Object.entries(req.body).forEach(async (data)=>{
        const qID = data[1].quesID
        await BuyerCommercialForm.findByIdAndUpdate({_id: qID}, 
                    {quesIndex: data[1].quesIndex},
                    {
                        new: true,
                        runValidators: true,
                        userFindAndModify: true
                    })
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: `Seller Commercail Form shuffled`,
    })
})


// // -----| Question Post |-----
// export const nestNotify_Admin_Post_Questions = CatchAsync( async(req, res, next)=>{

//     if(!req.body){
//         return res.status(201).json({
//             success: false,
//             message: "Provide proper details"
//         })
//     }
//     const sellerPropertyForm = await SellerForm.create(req.body)
//     // const sellerPropertyForm = await SellerResidentialForm.create(req.body)
//     // const sellerPropertyForm = await SellerResidentialCondoForm.create(req.body)
//     // const sellerPropertyForm = await SellerCommercialForm.create(req.body)

//     res.status(201).json({
//         success: true,
//         message: "Questions Post",
//         sellerPropertyForm
//     })
// })






// =============================================================================================

// Admin: All Properties added

// Admin: All New Properties added

// Admin: All Tour Requests by Users

// Admin: All new Tour Request by Users
