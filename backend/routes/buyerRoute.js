import express from 'express';
import authToken from '../utils/authToken.js';
import 
{ 
    nestNotify_Buyer_Get_Residential_Home_Form,
    nestNotify_Buyer_Fill_Residential_Home_Form,
    nestNotify_Buyer_Get_Filled_Residential_Home_Form,
    nestNotify_Buyer_Get_Residential_Condo_Form,
    nestNotify_Buyer_Fill_Residential_Condo_Form,
    nestNotify_Buyer_Get_Filled_Residential_Condo_Form,
    nestNotify_Buyer_Get_Commercail_Industrial_Form,
    nestNotify_Buyer_Fill_Commercail_Industrial_Form,
    nestNotify_Buyer_Get_Filled_Commercail_Industrial_Form
} 
from '../controllers/buyerController.js';

const router = express.Router();


router.route('/new/residential/home/form').post(nestNotify_Buyer_Get_Residential_Home_Form)


router.route('/new/residential/condo/form').post(nestNotify_Buyer_Get_Residential_Condo_Form)


router.route('/new/commercial/form').post(nestNotify_Buyer_Get_Commercail_Industrial_Form)

export default router;