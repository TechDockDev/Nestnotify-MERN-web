import express from 'express';
import authToken from '../utils/authToken.js';
import { nestNotify_Admin_Get_All_Questions, nestNotify_Admin_New_Property_Form_Creation, nestNotify_Admin_Suffle_Property_Form} from "../controllers/admin/adminController.js";

const router = express.Router()

router.route('/question/all').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Get_All_Questions);
router.route('/new/propety/form').post(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_New_Property_Form_Creation);
router.route('/suffle/property/form').put(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), nestNotify_Admin_Suffle_Property_Form);


export default router;