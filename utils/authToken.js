import jwt from 'jsonwebtoken';
import User from '../model/user/user.js';
import ErrorHandler from './errorHandler.js';

const authToken = {

    // -------| TOKEN GENERATION |-------
    signToken: function(id){
        return jwt.sign({id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        })
    },

    // -------| COOKIE SETUP AND RESPONSE RETURN |-------
    sendToken: function(user, statusCode, res){

        // 1) Token Generation
        const token = this.signToken(user._id);

        // 2) Options for cookie
        const options = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
            httpOnly: true,
        }

        // 3) Cookie seting in header
        res.cookie('token', token, options);

        // 4) Sending response
        return res.status(statusCode).json({
            success: true,
            token,
            user,
            role: user.role
        }) 
    },

    // -------| AUTHENTICATION CHECKING |-------
    isUserAuthenticated: async function(req, res, next){
        const {token} = req.cookies;

        // 1) Checking if cookie contains token
        if(!token){
            return res.status(401).send(`Please login again.`)
        }

        // 2) Decoding user using token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 3) Setting Authenicated User
        req.user = await User.findById(decoded.id);

        // 5) Calling next function
        next();
    },

    // -------| ROLE CHECKING |-------
    authorizedRoles: function(...roles){
        return (req, res, next) => {
            if (!roles.includes(req.user.role)) {
                return next(new ErrorHandler(`Unauthorizes access, your current role doesn't allow you to access this resource.`, 403));
            }
            next();
        }
    }
}

export default authToken;