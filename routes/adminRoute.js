import express from 'express';
import authToken from '../utils/authToken.js';
import { nestNotify_Admin_Get_All_Questions, nestNotify_Admin_Get_Seller_Property_Form, nestNotify_Admin_New_Property_Form_Creation, nestNotify_Admin_Suffle_Property_Form} from "../controllers/adminController.js";

const router = express.Router()
// Admin: all question route
router.route('/question/all').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Get_All_Questions);

// Admin: New Form Route
router.route('/new/propety/form').post(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_New_Property_Form_Creation);

// Admin: Seller Property Form route
router.route('/seller/property/from').get(authToken.isUserAuthenticated,authToken.authorizedRoles('admin'), nestNotify_Admin_Get_Seller_Property_Form);

// Admin: Form Question Suffle
router.route('/suffle/property/form').put(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Suffle_Property_Form);

export default router;