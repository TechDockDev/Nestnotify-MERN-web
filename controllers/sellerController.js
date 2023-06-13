import CatchAsync from '../middleware/catchAsync.js';
import SellerForm from '../model/SellerForm.js';

// 1) -----| SELLER: SUFFLE FORM QUESTIONS |-----
export const nestNotify_Seller_Get_Property_Form = CatchAsync( async(req, res, next)=>{
    const sellerPropertyForm = await SellerForm.find().sort({quesIndex: 0});
    res.status(200).json({
        success: true,
        message: "Seller Form Data",
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})