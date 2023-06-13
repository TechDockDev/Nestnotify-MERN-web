import express from 'express';
import authToken from '../utils/authToken.js';
import { nestNotify_User_Registration, nestNotify_User_SignIn, nestNotify_User_SignOut, nestNotify_User_Password_Update, nestNotify_User_Password_Forgot, nestNotify_User_Password_Reset } from '../controllers/auth/authController.js';

const router = express.Router();

router.route('/signup').post(nestNotify_User_Registration)
router.route('/signin').post(nestNotify_User_SignIn);
router.route('/signout').get(nestNotify_User_SignOut);

router.route('/password/update').put(authToken.isUserAuthenticated, nestNotify_User_Password_Update);
router.route('/password/forgot').post(nestNotify_User_Password_Forgot);
router.route('/password/reset/:token').post(nestNotify_User_Password_Reset);


export default router