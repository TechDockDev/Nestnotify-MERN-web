import express from 'express';
import authToken from '../utils/authToken.js';
import { nestNotify_Seller_Get_Property_Form } from '../controllers/sellerController.js';

const router = express.Router()

router.route('/get/property/form').get(authToken.isUserAuthenticated, authToken.authorizedRoles('seller'), nestNotify_Seller_Get_Property_Form)

export default router;