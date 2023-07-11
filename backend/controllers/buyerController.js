// Middlewares Import
import CatchAsync from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import ApiFeatures from '../utils/apiFeatures.js';

// DataBase imports
import BuyerResidentialHomeForm from '../model/questionnaires/BuyerResidentialHomeQues.js';
import BuyerResidentialCondoForm from '../model/questionnaires/BuyerResidentailCondoQues.js';
import BuyerCommercailForm from '../model/questionnaires/BuyerCommercialQues.js';



// ==============================================================================================
// Buyer Residential Home Form
// ==============================================================================================
// 1) Buyer: Get Residential Home form
export const nestNotify_Buyer_Get_Residential_Home_Form = CatchAsync( async(req, res, next)=>{

    const buyerPropertyForm = await BuyerResidentialHomeForm.find().sort({quesIndex: 0})
    
    if(!buyerPropertyForm){
        return next(new ErrorHandler(`Something went wrong, Please try again.`), 404)
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Buyer Residential Home",
        // propertyQuesCount,
        length: buyerPropertyForm.length,
        buyerPropertyForm
    })
})

// 2) Buyer: Fill Residential Home form
export const nestNotify_Buyer_Fill_Residential_Home_Form = CatchAsync( async(req, res, next)=>{

    res.status(200).json({
        success: true,
        status: "success",
        message: "Buyer Residential Home Form Fill",
    })
})

// 2) Buyer: Get Filled Residential Home form
export const nestNotify_Buyer_Get_Filled_Residential_Home_Form = CatchAsync( async(req, res, next)=>{

    res.status(200).json({
        success: true,
        status: "success",
        message: "All Buyer Residential Home Form Filled",
    })
})




// ==============================================================================================
// Buyer Residential Condo Form
// ==============================================================================================

// 1) Buyer: Get Residential Condo form
export const nestNotify_Buyer_Get_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    const buyerPropertyForm = await BuyerResidentialCondoForm.find().sort({quesIndex: 0})
    
    if(!buyerPropertyForm){
        return next(new ErrorHandler(`Something went wrong, Please try again.`), 404)
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Buyer Residential Condo Form",
        // propertyQuesCount,
        length: buyerPropertyForm.length,
        buyerPropertyForm
    })
})

// 1) Buyer: Fill Residential Condo form
export const nestNotify_Buyer_Fill_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    res.status(200).json({
        success: true,
        status: "success",
        message: "Buyer Residential Condo Form Fill",
    })
})

// 1) Buyer: Get Residential Condo form
export const nestNotify_Buyer_Get_Filled_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    res.status(200).json({
        success: true,
        status: "success",
        message: "All Buyer Residential Home Form Filled",
    })
})



// ==============================================================================================
// Buyer Commercial/Industrial Form
// ==============================================================================================

// 1) Buyer: Get Residential Home form
export const nestNotify_Buyer_Get_Commercail_Industrial_Form = CatchAsync( async(req, res, next)=>{

    const buyerPropertyForm = await BuyerCommercailForm.find().sort({quesIndex: 0})
    
    if(!buyerPropertyForm){
        return next(new ErrorHandler(`Something went wrong, Please try again.`), 404)
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Buyer Commercial Form",
        length: buyerPropertyForm.length,
        buyerPropertyForm
    })
})

// 2) Buyer: Get Residential Home form
export const nestNotify_Buyer_Fill_Commercail_Industrial_Form = CatchAsync( async(req, res, next)=>{

    res.status(200).json({
        success: true,
        status: "success",
        message: "Buyer Commercial Form Fill",
    })
})

// 3) Buyer: Get Residential Home form
export const nestNotify_Buyer_Get_Filled_Commercail_Industrial_Form = CatchAsync( async(req, res, next)=>{

    res.status(200).json({
        success: true,
        status: "success",
        message: "All Buyer Commercial Form Filled",
    })
})
