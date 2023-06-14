import express from 'express';
import authToken from '../utils/authToken.js';
import { 
    nestNotify_Admin_Get_All_Questions, 
    nestNotify_Admin_Get_Seller_Property_Form, 
    nestNotify_Admin_Get_Seller_Residential_Home_Form, 
    nestNotify_Admin_Get_Seller_Residential_Condo_Form,
    nestNotify_Admin_Get_Seller_Commercial_Property_Form,
    nestNotify_Admin_Suffle_Property_Form,
    nestNotify_Admin_Post_Questions 
} from "../controllers/adminController.js";

const router = express.Router()

// 1) Admin: all question route
router.route('/question/all').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Get_All_Questions);

// 2) Admin: Seller Property Form route
router.route('/seller/property/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Get_Seller_Property_Form);

// 3) Admin: Seller Residential Home Property Form route
router.route('/seller/residential/home/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Get_Seller_Residential_Home_Form);

// 4) Admin: Seller Residential Condo Property Form route
router.route('/seller/residential/condo/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Get_Seller_Residential_Condo_Form);

// Admin: Seller Commerical Property Form route
router.route('/seller/commercial/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Get_Seller_Commercial_Property_Form);

// Admin: Form Question Suffle
router.route('/suffle/property/form').put(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Suffle_Property_Form);

// nestNotify_Admin_Post_Questions
router.route('/question/post').post(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Post_Questions);


export default router;