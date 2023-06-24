import jwt from 'jsonwebtoken';
import Auth from '../model/auth/Auth.js';
import ErrorHandler from './errorHandler.js';
import AdminAuth from '../model/admin/AdminAuth.js';

const authToken = {

    // -------| TOKEN GENERATION |-------
    signToken: function (id) {
        return jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        })
    },

    // -------| ADMIN: COOKIE SETUP AND RESPONSE RETURN |-------
    adminSendToken: function (adminAuth, statusCode, res, oper) {

        // 1) Token Generation
        const token = this.signToken(adminAuth._id);

        // 2) Options for cookie
        const options = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
            httpOnly: true,
        }

        // 3) Cookie seting in header
        res.cookie('token', token, options);

        let master;
        if (!adminAuth.master) {
            master = null
        } else {
            master = adminAuth.master
        }

        let message;
        if (oper.toLowerCase() === 'login') {
            message = 'You are logged in successfully.'
        }
        else if (oper.toLowerCase() === 'register') {
            message = 'New Admin Registration Successful.'
        }
        else if (oper.toLowerCase() === 'passwordchange') {
            message = 'Password reset successful'
        }
        else if (oper.toLowerCase() === 'reset') {
            message = 'Password reset successful'
        }
        // 4) Sending response
        return res.status(statusCode).json({
            success: true,
            status: "success",
            message,
            // adminAuth,
            name: adminAuth.firstName + " " + adminAuth.lastName,
        })
    },

    // -------| COOKIE SETUP AND RESPONSE RETURN |-------
    sendToken: function (auth, statusCode, res, oper) {

        // 1) Token Generation
        const token = this.signToken(auth._id);

        // 2) Options for cookie
        const options = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
            httpOnly: true,
        }

        // 3) Cookie seting in header
        res.cookie('token', token, options);

        let master;
        if (!auth.master) {
            master = null
        } else {
            master = auth.master
        }

        let message;
        if (oper.toLowerCase() === 'login') {
            message = 'You are logged successfully.'
        }
        else if (oper.toLowerCase() === 'register') {
            message = 'User Registration Successful.'
        }
        else if (oper.toLowerCase() === 'passwordchange') {
            message = 'Password reset successful'
        }
        else if (oper.toLowerCase() === 'reset') {
            message = 'Password reset successful'
        }
        // 4) Sending response
        return res.status(statusCode).json({
            success: true,
            status: "success",
            message,
            auth,
            role: auth.role,
        })
    },

    // -------| ADMIN AUTHENTICATION CHECKING |-------
    isAdminAuthenticated: async function (req, res, next) {
        const { token } = req.cookies;

        // 1) Checking if cookie contains token
        if (!token) {
            return res.status(401).send(`Please login again.`)
        }

        // 2) Decoding user using token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 3) Setting Authenicated User
        req.auth = await AdminAuth.findById(decoded.id).select("+master").select('+role');
        // 5) Calling next function
        next();
    },

    // -------| AUTHENTICATION CHECKING |-------
    isUserAuthenticated: async function (req, res, next) {
        const { token } = req.cookies;

        // 1) Checking if cookie contains token
        if (!token) {
            return res.status(401).send(`Please login again.`)
        }

        // 2) Decoding user using token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 3) Setting Authenicated User
        req.auth = await Auth.findById(decoded.id).select("+master");
        // 5) Calling next function
        next();
    },

    // -------| SUPER ROLE CHECKING |-------
    authorizedSuperRoles: function (...masters) {
        return (req, res, next) => {
            // console.log(req.user.master)
            // console.log(masters)
            if (!masters.includes(req.auth.master)) {
                return next(new ErrorHandler(`Unauthorizes access.`, 403));
            }
            next();
        }
    },

    // -------| ADMIN ROLE CHECKING |-------
    authorizedAdminRoles: function (...roles) {
        return (req, res, next) => {
            if (!roles.includes(req.auth.role)) {
                return next(new ErrorHandler(`Unauthorizes access, your current role doesn't allow you to access this resource.`, 403));
            }
            next();
        }
    },
    // -------| ADMIN ROLE CHECKING |-------
        authorizedRoles: function (...roles) {
        return (req, res, next) => {
            if (!roles.includes(req.auth.role)) {
                return next(new ErrorHandler(`Unauthorizes access, your current role doesn't allow you to access this resource.`, 403));
            }
            next();
        }
    }
}

export default authToken;