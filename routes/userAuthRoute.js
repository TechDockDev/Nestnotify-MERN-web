import express from 'express';
import { nestNotify_User_Registration, nestNotify_User_SignIn, nestNotify_User_SignOut } from '../controllers/auth/authController.js';

const router = express.Router();

router.route('/signup').post(nestNotify_User_Registration)
router.route('/signin').post(nestNotify_User_SignIn);
router.route('/signout').get(nestNotify_User_SignOut);

export default router