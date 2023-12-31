import express from 'express';
import authToken from '../utils/authToken.js';
import 
{ 
    nestNotify_Seller_Get_Property_Form,
    nestNotify_Seller_Fill_New_Property_Form,
    nestNotify_Seller_Get_Filled_New_Property_Form,
    nestNotify_Seller_Get_Residential_Home_Form,
    nestNotify_Seller_Fill_New_Residential_Home_Form,
    nestNotify_Seller_Get_Filled_Residential_Home_Form,
    nestNotify_Seller_Fill_New_Residential_Condo_Form,
    nestNotify_Seller_Get_Residential_Condo_Form,
    nestNotify_Seller_Get_Filled_Residential_Condo_Form,
    nestNotify_Seller_Fill_New_Commercial_Industrial_Form,
    nestNotify_Seller_Get_Commercial_Industrial_Form,
    nestNotify_Seller_Get_Filled_Commercial_Industrial_Form
} 
from '../controllers/sellerController.js';

const router = express.Router()

// Unauth
router.route('/get/property/form').get(nestNotify_Seller_Get_Property_Form)
router.route('/get/residential/home/form').get(nestNotify_Seller_Get_Residential_Home_Form)
router.route('/get/residential/condo/form').get(nestNotify_Seller_Get_Residential_Condo_Form)
router.route('/get/commercial/form').get(nestNotify_Seller_Get_Commercial_Industrial_Form)

// New property form
router.route('/new/property/form').post( nestNotify_Seller_Fill_New_Property_Form)
// router.route('/new/property/form').post(authToken.isUserAuthenticated, authToken.authorizedRoles('seller'), nestNotify_Seller_Fill_New_Property_Form)
router.route('/get/filled/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('seller'), nestNotify_Seller_Get_Filled_New_Property_Form)
router.route('/get/property/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('seller'), nestNotify_Seller_Get_Property_Form)

// New residential home form
router.route('/new/residential/home/form').post(nestNotify_Seller_Fill_New_Residential_Home_Form)
// router.route('/new/residential/home/form').post(authToken.isUserAuthenticated, authToken.authorizedRoles('seller'), nestNotify_Seller_Fill_New_Residential_Home_Form)
router.route('/get/residential/home/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('seller'), nestNotify_Seller_Get_Residential_Home_Form)
router.route('/get/filled/seller/home/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('seller'), nestNotify_Seller_Get_Filled_Residential_Home_Form)

// New residential condo form
router.route('/new/residential/condo/form').post(nestNotify_Seller_Fill_New_Residential_Condo_Form)
// router.route('/new/residential/condo/form').post(authToken.isUserAuthenticated, authToken.authorizedRoles('seller'), nestNotify_Seller_Fill_New_Residential_Condo_Form)
router.route('/get/residential/condo/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('seller'), nestNotify_Seller_Get_Residential_Condo_Form)
router.route('/get/filled/seller/condo/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('seller'), nestNotify_Seller_Get_Filled_Residential_Condo_Form)

// New commercial form
router.route('/new/commercial/form').post(nestNotify_Seller_Fill_New_Commercial_Industrial_Form)
router.route('/new/commercial/form').post(authToken.isUserAuthenticated, authToken.authorizedRoles('seller'), nestNotify_Seller_Fill_New_Commercial_Industrial_Form)
router.route('/get/commercial/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('seller'), nestNotify_Seller_Get_Commercial_Industrial_Form)
router.route('/get/filled/seller/commercial/property/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('seller'), nestNotify_Seller_Get_Filled_Commercial_Industrial_Form)


export default router;