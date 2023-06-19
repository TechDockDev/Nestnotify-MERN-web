import express from 'express';
import authToken from '../utils/authToken.js';
import { 
    nestNotify_Admin_Get_Seller_Property_Form, 
    nestNotify_Admin_Get_Seller_Residential_Home_Form, 
    nestNotify_Admin_Get_Seller_Residential_Condo_Form,
    nestNotify_Admin_Get_Seller_Commercial_Property_Form,
    nestNotify_Admin_Suffle_Seller_Property_Form,
    nestNotify_Admin_Suffle_Seller_Residential_Home_Form,
    nestNotify_Admin_Suffle_Seller_Residential_Condo_Form,
    nestNotify_Admin_Suffle_Seller_Commercail_Form,
    nestNotify_Admin_Suffle_Buyer_Residentail_Home_Form,
    nestNotify_Admin_Suffle_Buyer_Residential_Condo_Form,
    nestNotify_Admin_Suffle_Buyer_Commercail_Form
    // nestNotify_Admin_Post_Questions 
} from "../controllers/adminController.js";

import {
    nestNotify_Super_Admin_Search_Feature,
    nestNotify_Super_Admin_Create_Admin_Account,
    nestNotify_Super_Admin_User_Role_Change,
    nestNotify_Super_Admin_User_Account_Delete,
    nestNotify_Super_Admin_Get_All_Users,
    nestNotify_Super_Admin_Get_All_Admins,
    nestNotify_Super_Admin_Get_All_Sellers,
    nestNotify_Super_Admin_Get_All_Buyers,
    nestNotify_Super_Admin_Get_All_Renters,
    nestNotify_Super_Admin_Get_All_LandLords,
    nestNotify_Super_Admin_Get_All_Invetors,
    nestNotify_Super_Admin_Single_User_Profile
} from "../controllers/superAdminController.js"

const router = express.Router()


/////////////// | SUPER ADMIN | ///////////////
// 1) Super Admin: User Role update
router.route('/user/role/change/:id').put(authToken.isUserAuthenticated, authToken.authorizedSuperRoles('super'), authToken.authorizedRoles('admin'), nestNotify_Super_Admin_User_Role_Change);
router.route('/user/account/delete/:id').delete(authToken.isUserAuthenticated, authToken.authorizedSuperRoles('super'), authToken.authorizedRoles('admin'), nestNotify_Super_Admin_User_Account_Delete);
router.route('/new/admin/create').post(authToken.isUserAuthenticated, authToken.authorizedSuperRoles('super'), authToken.authorizedRoles('admin'), nestNotify_Super_Admin_Create_Admin_Account);


/////////////// | ADMIN | ///////////////
router.route('/search').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Super_Admin_Search_Feature);
router.route('/all/users').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Super_Admin_Get_All_Users);
router.route('/all/admins').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Super_Admin_Get_All_Admins);
router.route('/all/sellers').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Super_Admin_Get_All_Sellers);
router.route('/all/buyers').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Super_Admin_Get_All_Buyers);
router.route('/all/renters').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Super_Admin_Get_All_Renters);
router.route('/all/landlords').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Super_Admin_Get_All_LandLords);
router.route('/all/investors').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Super_Admin_Get_All_Invetors);
router.route('/get/user/profile/:id').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Super_Admin_Single_User_Profile);

// Admin: Seller Property Form route
router.route('/seller/property/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Get_Seller_Property_Form);
router.route('/seller/residential/home/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Get_Seller_Residential_Home_Form);
router.route('/seller/residential/condo/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Get_Seller_Residential_Condo_Form);
router.route('/seller/commercial/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Get_Seller_Commercial_Property_Form);

// Admin: Form Question Suffle

// Seller
router.route('/suffle/seller/property/form').put(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Suffle_Seller_Property_Form);
router.route('/suffle/seller/resihome/form').put(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Suffle_Seller_Residential_Home_Form);
router.route('/suffle/seller/resicondo/form').put(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Suffle_Seller_Residential_Condo_Form);
router.route('/suffle/seller/commercail/form').put(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Suffle_Seller_Commercail_Form);

// Buyer
router.route('/suffle/buyer/resihome/form').put(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Suffle_Buyer_Residentail_Home_Form);
router.route('/suffle/buyer/resicondo/form').put(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Suffle_Buyer_Residential_Condo_Form);
router.route('/suffle/buyer/commercail/form').put(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Suffle_Buyer_Commercail_Form);


//////////////////////////////////////
// nestNotify_Admin_Post_Questions
// router.route('/question/post').post(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Post_Questions);
//////////////////////////////////////

export default router;