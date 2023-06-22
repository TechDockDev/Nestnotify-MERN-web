// -----| MODULES IMPORT |-----
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import mogran from 'morgan';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middleware/error.js';

// -----| CONFIGURATIONS |-----
const app = express();

// 1) Environment Varaible configuration
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: './config/config.env' });
}

// 2) Project setup and cros-origin setup
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(mogran("common"));
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(cors({credentials: true, origin:`http://localhost:3000`}));
// app.use(cors())

// -----| Application Route Imports
import superAdminRoute from './routes/superAdminRoutes.js'
import adminRoute from './routes/adminRoute.js';
import userAuthRoute from './routes/userAuthRoute.js';
import sellerRoute from './routes/sellerRoute.js';

// -----| APP ROUTES |-----
app.use('/api/v1/super/admin', superAdminRoute);
app.use('/api/v1/admin', adminRoute);
app.use('/api/v1/user', userAuthRoute);
app.use('/api/v1/seller', sellerRoute)

app.all('*', (req, res)=>{
    return res.status(404).json({
        success: false,
        message: `OPs Wrong URL '${req.url}' or Wrong REST API method, Try Correct one.`
    });
})

// -----| ERROR MIDDLEWARE |-----
app.use(errorMiddleware)

export default app;