import CatchAsync from '../middleware/catchAsync.js';
import SellerForm from '../model/SellerForm.js';


// 1) -----| ADMIN: GET ALL QUESTIONS |-----
export const nestNotify_Admin_Get_All_Questions = CatchAsync( async(req, res)=>{
    res.status(200).json({
        success: true,
        message: "All available questions"
    })
})

// 2) -----| ADMIN: CREATE NEW PROPERTY FORM |-----
export const nestNotify_Admin_New_Property_Form_Creation = CatchAsync( async(req, res)=>{
    res.status(200).json({
        success: true,
        message: "New Question Form"
    })
})

// 3) -----| ADMIN: GET SELLER PROPERTY FORM |-----
export const nestNotify_Admin_Get_Seller_Property_Form = CatchAsync( async(req, res, next)=>{
    const sellerPropertyForm = await SellerForm.find().sort({quesIndex: 0});
    res.status(200).json({
        success: true,
        message: "Seller Form Data",
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})

// 4) -----| ADMIN: SUFFLE FORM QUESTIONS |-----
export const nestNotify_Admin_Suffle_Property_Form = CatchAsync( async(req, res, next)=>{
    res.status(200).json({
        success: true,
        message: "Forms Questions Suffle"
    })
})



// -----| Question Post |-----
export const nestNotify_Admin = CatchAsync( async(req, res, next)=>{
    // console.log(req.body)
    const sellerPropertyForm = await SellerForm.create(req.body);
    res.status(200).json({
        success: true,
        message: "Questions Post",
        sellerPropertyForm
    })
})