import express from 'express';
import authToken from '../utils/authToken.js';
import { 
    nestNotify_Admins_Users_Sign_IN,
    nestNotify_Admin_Users_Sign_Out,
    nestNotify_Admin_Get_Profile_Data
} from '../controllers/adminAuthController.js';

import {
    nestNotify_Admin_Account_Enable_Disable_Admin,
    nestNotify_Admin_Account_Enable_Disable_User,

    nestNotify_Admin_Get_All_Admins,
    nestNotify_Admin_Get_All_Users,
    nestNotify_Admin_Get_All_Sellers,
    nestNotify_Admin_Get_All_Buyers,
    nestNotify_Admin_Get_All_Renters,
    nestNotify_Admin_Get_All_LandLords,
    nestNotify_Admin_Get_All_Invetors,
    nestNotify_Admin_Single_User_Profile,

    nestNotify_Admin_Get_Seller_Property_Form,
    nestNotify_Admin_Shuffle_Seller_Property_Form,
    nestNotify_Admin_Reset_Seller_Property_Form,

    nestNotify_Admin_Get_Seller_Residential_Home_Form,
    nestNotify_Admin_Shuffle_Seller_Residential_Home_Form,
    nestNotify_Admin_Reset_Seller_Residential_Home_Form,

    nestNotify_Admin_Get_Seller_Residential_Condo_Form,
    nestNotify_Admin_Shuffle_Seller_Residential_Condo_Form,
    nestNotify_Admin_Reset_Seller_Residential_Condo_Form,

    nestNotify_Admin_Get_Seller_Commercial_Property_Form,
    nestNotify_Admin_Shuffle_Seller_Commercail_Form,
    nestNotify_Admin_Reset_Seller_Commercail_Form,


    nestNotify_Admin_Get_Buyer_Residential_Home_Form,
    nestNotify_Admin_Shuffle_Buyer_Residentail_Home_Form,
    nestNotify_Admin_Reset_Buyer_Residential_Home_Form,

    nestNotify_Admin_Get_Buyer_Residential_Condo_Form,
    nestNotify_Admin_Shuffle_Buyer_Residential_Condo_Form,
    nestNotify_Admin_Reset_Buyer_Residential_Condo_Form,

    nestNotify_Admin_Get_Buyer_Commercial_Form,
    nestNotify_Admin_Shuffle_Buyer_Commercail_Form,
    nestNotify_Admin_Reset_Buyer_Commercail_Form,

    nestNotify_Admin_Get_Buyer_Land_Form,
    nestNotify_Admin_Shuffle_Buyer_Land_Form,
    nestNotify_Admin_Reset_Buyer_Land_Form,

    nestNotify_Admin_Post_Questions

} from '../controllers/adminController.js';


const router = express.Router()

// Admin: Authentication
router.route('/signin').post(nestNotify_Admins_Users_Sign_IN);
router.route('/signout').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Users_Sign_Out);
router.route('/get/profile/data').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Get_Profile_Data);

// Admin: Account Enable Disable Route
router.route('/admin/account/modify/:id').put(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Account_Enable_Disable_Admin);
router.route('/user/account/modify/:id').put(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Account_Enable_Disable_User);

// Admin: Filtering and Getting all Users
router.route('/all/admins').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Get_All_Admins);
router.route('/all/users').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Get_All_Users);
router.route('/all/sellers').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Get_All_Sellers);
router.route('/all/buyers').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Get_All_Buyers);
router.route('/all/renters').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Get_All_Renters);
router.route('/all/landlords').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Get_All_LandLords);
router.route('/all/investors').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Get_All_Invetors);
router.route('/get/user/profile/:id').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Single_User_Profile);

// Admin: Seller New Property Form
router.route('/seller/property/form').get( nestNotify_Admin_Get_Seller_Property_Form);
router.route('/shuffle/seller/property/form').put(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Shuffle_Seller_Property_Form);
router.route('/reset/seller/property/form').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Reset_Seller_Property_Form);

// Admin: Seller Residential Home Form
router.route('/seller/residential/condo/form').get(nestNotify_Admin_Get_Seller_Residential_Condo_Form);
router.route('/shuffle/seller/resihome/form').put(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Shuffle_Seller_Residential_Home_Form);
router.route('/reset/seller/resihome/form').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Reset_Seller_Residential_Home_Form);

// Admin: Seller Residential Condo Form
router.route('/seller/residential/home/form').get(nestNotify_Admin_Get_Seller_Residential_Home_Form);
router.route('/shuffle/seller/resicondo/form').put(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Shuffle_Seller_Residential_Condo_Form);
router.route('/reset/seller/resicondo/form').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Reset_Seller_Residential_Condo_Form);

// Admin: Seller Commercail Form
router.route('/seller/commercial/form').get(nestNotify_Admin_Get_Seller_Commercial_Property_Form);
router.route('/shuffle/seller/commercail/form').put(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Shuffle_Seller_Commercail_Form);
router.route('/reset/seller/commercial/form').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Reset_Seller_Commercail_Form);

// Admin: Buyer Residnetial Home Form
router.route('/buyer/residential/home/form').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Get_Buyer_Residential_Home_Form);
router.route('/shuffle/buyer/resihome/form').put(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Shuffle_Buyer_Residentail_Home_Form);
router.route('/reset/buyer/resihome/form').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Reset_Buyer_Residential_Home_Form);

// Admin: Buyer Residential Condo Form
router.route('/buyer/residential/condo/form').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Get_Buyer_Residential_Condo_Form);
router.route('/shuffle/buyer/resicondo/form').put(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Shuffle_Buyer_Residential_Condo_Form);
router.route('/reset/buyer/resicondo/form').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Reset_Buyer_Residential_Condo_Form);

// Admin: Buyer Commercail Form
router.route('/buyer/commercial/form').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Get_Buyer_Commercial_Form);
router.route('/shuffle/buyer/commercail/form').put(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Shuffle_Buyer_Commercail_Form);
router.route('/reset/buyer/commercial/form').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Reset_Buyer_Commercail_Form);

// Admin: Buyer Land Form
router.route('/buyer/land/form').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Get_Buyer_Land_Form);
router.route('/shuffle/buyer/land/form').put(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Shuffle_Buyer_Land_Form);
router.route('/reset/buyer/land/form').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Reset_Buyer_Land_Form);

////////////////////////////////////
// nestNotify_Admin_Post_Questions
router.route('/question/post').post(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Post_Questions);
////////////////////////////////////

export default router;