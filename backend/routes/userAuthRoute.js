import express from 'express';
import authToken from '../utils/authToken.js';
import { 
        nestNotify_User_Registration, 
        nestNotify_User_SignIn, 
        nestNotify_User_SignOut, 
        nestNotify_User_Password_Update, 
        nestNotify_User_Password_Forgot, 
        nestNotify_User_Password_Reset 
} from '../controllers/authController.js';

import { 
    nestNotify_Get_User_Profile_data,
    nestNotify_User_Profile_Personal_Data_Update,
    nestNotify_User_Profile_Address_Data_Update,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/signup').post(nestNotify_User_Registration)
router.route('/signin').post(nestNotify_User_SignIn);
router.route('/signout').get(nestNotify_User_SignOut);

router.route('/get/profile').get(authToken.isUserAuthenticated, nestNotify_Get_User_Profile_data);
router.route('/update/profile/data').patch(authToken.isUserAuthenticated, nestNotify_User_Profile_Personal_Data_Update);
router.route('/update/profile/address').patch(authToken.isUserAuthenticated, nestNotify_User_Profile_Address_Data_Update);

router.route('/password/update').put(authToken.isUserAuthenticated, nestNotify_User_Password_Update);
router.route('/password/forgot').post(nestNotify_User_Password_Forgot);
router.route('/password/reset/:token').post(nestNotify_User_Password_Reset);


export default router