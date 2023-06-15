import express from 'express';
import authToken from '../utils/authToken.js';
import { 
    nestNotify_Super_Admin_User_Role_Change,
    nestNotify_Super_Admin_User_Account_Delete,
    nestNotify_Admin_Get_Seller_Property_Form, 
    nestNotify_Admin_Get_Seller_Residential_Home_Form, 
    nestNotify_Admin_Get_Seller_Residential_Condo_Form,
    nestNotify_Admin_Get_Seller_Commercial_Property_Form,
    nestNotify_Admin_Suffle_Property_Form,
    nestNotify_Admin_Post_Questions 
} from "../controllers/adminController.js";

const router = express.Router()


/////////////// | SUPER ADMIN | ///////////////
// 1) Super Admin: User Role update
router.route('/user/role/change/:id').put(authToken.isUserAuthenticated, authToken.authorizedSuperRoles('super'), authToken.authorizedRoles('admin'), nestNotify_Super_Admin_User_Role_Change);
router.route('/user/account/delete/:id').delete(authToken.isUserAuthenticated, authToken.authorizedSuperRoles('super'), authToken.authorizedRoles('admin'), nestNotify_Super_Admin_User_Account_Delete);

/////////////// | ADMIN | ///////////////
// 1) Admin: Seller Property Form route
router.route('/seller/property/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Get_Seller_Property_Form);

// 2) Admin: Seller Residential Home Property Form route
router.route('/seller/residential/home/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Get_Seller_Residential_Home_Form);

// 3) Admin: Seller Residential Condo Property Form route
router.route('/seller/residential/condo/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Get_Seller_Residential_Condo_Form);

// 4) Admin: Seller Commerical Property Form route
router.route('/seller/commercial/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Get_Seller_Commercial_Property_Form);

// 5) Admin: Form Question Suffle
router.route('/suffle/property/form').put(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Suffle_Property_Form);


//////////////////////////////////////
// nestNotify_Admin_Post_Questions
router.route('/question/post').post(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Post_Questions);
//////////////////////////////////////

export default router;