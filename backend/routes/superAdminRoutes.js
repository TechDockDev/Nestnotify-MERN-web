import express from 'express';
import authToken from '../utils/authToken.js';
import { 
    nestNotify_Admin_Registration_By_Super_Admin,
    nestNotify_Admins_Users_Sign_IN,
    nestNotify_Admin_Users_Sign_Out,
    nestNotify_Admin_Get_Profile_Data
} from '../controllers/adminAuthController.js';

import {

} from '../controllers/superAdminController.js';

const router = express.Router();


/////////////// | SUPER ADMIN | ///////////////

// router.route('/new/admin').post(nestNotify_User_Super_Admin_Admin_Registration)

router.route('/new/admin').post(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), authToken.authorizedSuperRoles('super'), nestNotify_Admin_Registration_By_Super_Admin)
router.route('/signin').post(nestNotify_Admins_Users_Sign_IN)
router.route('/signout').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), nestNotify_Admin_Users_Sign_Out);
router.route('/get/profile/data').get(authToken.isAdminAuthenticated, authToken.authorizedAdminRoles('admin'), authToken.authorizedSuperRoles('super'), nestNotify_Admin_Get_Profile_Data);

// router.route('/user/account/delete/:id').delete(authToken.isAdminAuthenticated, authToken.authorizedSuperRoles('super'), authToken.authorizedAdminRoles('admin'));

export default router;