// Middlewares Import
import CatchAsync from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
// import ApiFeatures from '../utils/apiFeatures.js';

// Database Model Imports 
import AdminAuth from '../model/admin/AdminAuth.js';
import Auth from '../model/auth/Auth.js';

// import QuestionsModel from '../model/questionnaires/Question.js';

import SellerPropertyQues from '../model/SellerPropertyQues.js';
import SellerResidentialHomeForm from '../model/questionnaires/SellerResidentialHomeQues.js';
import SellerResidentialCondoForm from '../model/questionnaires/SellerResidentialCondoQues.js';
import SellerCommercialForm from '../model/questionnaires/SellerCommercialQues.js';

import BuyerResidentialHomeForm from '../model/questionnaires/BuyerResidentialHomeQues.js';
import BuyerResidentialCondoForm from '../model/questionnaires/BuyerResidentailCondoQues.js';
import BuyerCommercialForm from '../model/questionnaires/BuyerCommercialQues.js';
import BuyerLandQues from '../model/questionnaires/BuyerLandQues.js';


// 01) Admin: Admin Account Disable Enable
export const nestNotify_Admin_Account_Enable_Disable_Admin = CatchAsync( async(req, res, next)=>{
    
    const userExist = await AdminAuth.findById(req.params.id)
    
    if(!userExist){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    if(userExist.userActive === true){
        userExist.userActive = false
        await userExist.save()
    } else if(userExist.userActive === false) {
        userExist.userActive = true
        await userExist.save()
    }

    res.status(201).json({
        success: true,
        status: "success",
        message: "Permission modified",
        name: userExist.firstName + " " + userExist.lastName,
        accountStatus: userExist.userActive
    })
})


// 02) Admin: User Account Disable Enable
export const nestNotify_Admin_Account_Enable_Disable_User = CatchAsync( async(req, res, next)=>{
    
    const userExist = await Auth.findById(req.params.id)

    if(!userExist){
        return next(new ErrorHandler(`User doesn't exist`))
    }
    
    if(userExist.userActive === true){
        userExist.userActive = false
        await userExist.save()
    } else if(userExist.userActive === false) {
        userExist.userActive = true
        await userExist.save()
    }

    res.status(201).json({
        success: true,
        status: "success",
        message: "Permission modified",
        name: userExist.firstName + " " + userExist.lastName,
        accountStatus: userExist.userActive
    })

})


// 03) Admin: Get All Admins account
export const nestNotify_Admin_Get_All_Admins = CatchAsync( async(req, res, next) =>{
    // const adminsData = await AdminAuth.find({role: "admin", master: null})
    const adminsData = await AdminAuth.find({role: "admin"})
    if(!adminsData){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }

    // filtering logged in data
    const allAdmins = adminsData.filter((data)=>{
        if(data._id.toString()===req.auth.id){
            return
        }

        return data
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: `All Admins list`,
        length: allAdmins.length,
        allAdmins
    })
})


// 04) Admin: Get Differernt Users
export const nestNotify_Admin_Get_All_Users = CatchAsync( async(req, res, next) =>{

    const allUsers = await Auth.find()

    if(!allUsers){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }
    res.status(200).json({
        success: true,
        status: "success",
        message: `All Users list`,
        length: allUsers.length,
        allUsers
    })
})


// 05) Admin: Get Sellers
export const nestNotify_Admin_Get_All_Sellers = CatchAsync( async(req, res, next) =>{

    const allSellers = await Auth.find({role: "seller", master: null})

    if(!allSellers){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: `All Sellers list`,
        length: allSellers.length,
        allSellers
    })
})


// 06) Admin: Get Buyers
export const nestNotify_Admin_Get_All_Buyers = CatchAsync( async(req, res, next) =>{

    const allBuyers = await Auth.find({role: "buyer", master: null})

    if(!allBuyers){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: `All Buyers list`,
        length: allBuyers.length,
        allBuyers
    })
})


// 07) Admin: Get Renters
export const nestNotify_Admin_Get_All_Renters = CatchAsync( async(req, res, next) =>{
    const allRenters = await Auth.find({role: "renter", master: null})

    if(!allRenters){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: `All Renters list`,
        length: allRenters.length,
        allRenters
    })
})


// 08) Admin: Get LandLords
export const nestNotify_Admin_Get_All_LandLords = CatchAsync( async(req, res, next) =>{

    const allLandLords = await Auth.find({role: "landlord", master: null})

    if(!allLandLords){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: `All Landlords list`,
        length: allLandLords.length,
        allLandLords
    })
})


// 09) Admin: Investors
export const nestNotify_Admin_Get_All_Invetors = CatchAsync( async(req, res, next) =>{

    const allInvestors = await Auth.find({role: "invester", master: null})

    if(!allInvestors){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: `All investers list`,
        length: allInvestors.length,
        allInvestors
    })
})


// 10) Admin: Get Single User
export const nestNotify_Admin_Single_User_Profile = CatchAsync( async(req, res, next) =>{

    if(!req.params.id){
        return next(new ErrorHandler(`Something wrong, Please try again.`, 404))
    }

    let userProfile;

    const normalUser = await Auth.findById({_id: req.params.id})

    const adminUser = await AdminAuth.findById({_id: req.params.id})

    if(normalUser){
        userProfile = normalUser
    } else if(adminUser){
        userProfile = adminUser
    } else {
        userProfile = null
    }


    if(!userProfile){
        return next(new ErrorHandler(`Something went wrong.`, 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: `User List`,
        userProfile
    })
})



// ==============================================================================================
// Seller Property Form Questionnaires (Get, Suffle, Reset)
// ==============================================================================================


// 11) Admin: Get Seller Property Form
export const nestNotify_Admin_Get_Seller_Property_Form = CatchAsync( async(req, res, next)=>{

    const sellerPropertyForm = await SellerPropertyQues.find().sort({quesIndex: 0})

    // const resultPerPage = 3;
    // const propertyQuesCount = await SellerPropertyQues.countDocuments()

    // const apiFeature = new ApiFeatures(SellerPropertyQues.find(), req.query).pagination(resultPerPage)
    // const sellerPropertyForm = await apiFeature.query;

    if(!sellerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Seller New Property Form",
        // propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})


// 12) Admin: Shuffle Seller Property Form
export const nestNotify_Admin_Shuffle_Seller_Property_Form = CatchAsync( async(req, res, next)=>{

    const sCF = await SellerPropertyQues.countDocuments()
    
    if(req.body.length!==sCF){
        return next(new ErrorHandler('Something wrong in form', 401))
    }
    // console.log(req.body)
    const questionArray = req.body
    questionArray.forEach(async (data)=>{
        await SellerPropertyQues.findByIdAndUpdate( 
            { _id: data.quesID }, 
            { quesIndex: data.quesIndex },
            {
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    return res.status(200).json({
        success: true,
        status: "success",
        message: `Seller New Property Form Questionnaire Suffled`,
    })
})


// 13) Admin: Reset Seller Property Form
export const nestNotify_Admin_Reset_Seller_Property_Form = CatchAsync( async(req, res, next)=>{

    const sellerPropForm = await SellerPropertyQues.find().sort({createdAt: 0})

    Object.entries(sellerPropForm).forEach(async (data)=>{
        console.log(data[0])
        await SellerPropertyQues.findByIdAndUpdate({_id: data[1]._id}, {quesIndex: data[1].fixIndex}, 
            {                 
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    return res.status(200).json({
        success: true,
        status: "success",
        message: `Seller New Property Form Questionnaire Reset`,
    })
})


// ==============================================================================================
// Seller Residential Home Form Questionnaires (Get, Suffle, Reset)
// ==============================================================================================

// 14) Admin: Get Seller Residetnial Home Form (Single Questionnaire)
export const nestNotify_Admin_Get_Seller_Residential_Home_Form = CatchAsync( async(req, res, next)=>{
    
    const sellerPropertyForm = await SellerResidentialHomeForm.find().sort({quesIndex: 0});

    if(!sellerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Seller Residetial Home Questionnaire",
        // propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})


// 15) Admin: shuffle Seller Residential Home Form
export const nestNotify_Admin_Shuffle_Seller_Residential_Home_Form = CatchAsync( async(req, res, next)=>{

    const sCF = await SellerResidentialHomeForm.countDocuments()

    if(req.body.length!==sCF){
        return next(new ErrorHandler('Something wrong in form', 401))
    }

    const questionArray = req.body
    questionArray.forEach(async (data)=>{
        await SellerResidentialHomeForm.findByIdAndUpdate( 
            { _id: data.quesID }, 
            { quesIndex: data.quesIndex },
            {
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: `Seller Residetial Home Questionnaire Shuffled`,
    })
})


// 16) Admin: Reset Seller Property Form
export const nestNotify_Admin_Reset_Seller_Residential_Home_Form = CatchAsync( async(req, res, next)=>{

    const sellerPropForm = await SellerResidentialHomeForm.find().sort({createdAt: 0})

    Object.entries(sellerPropForm).forEach(async (data)=>{
        console.log(data[0])
        await SellerResidentialHomeForm.findByIdAndUpdate({_id: data[1]._id}, {quesIndex: data[1].fixIndex}, 
            {                 
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    return res.status(200).json({
        success: true,
        status: "success",
        message: `Seller Residetial Home Questionnaire Reset`,
    })
})

// ==============================================================================================
// Seller Residential Condo Form Questionnaires (Get, Suffle, Reset)
// ==============================================================================================

// 17) Admin: Get Seller Residential Condo Form (Single Questionnaire)
export const nestNotify_Admin_Get_Seller_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    const sellerPropertyForm = await SellerResidentialCondoForm.find().sort({quesIndex: 0});

    if(!sellerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Seller Residential Condo Form Questionnaire",
        // propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})


// 18) Admin: shuffle Seller Residentail Condo Form 
export const nestNotify_Admin_Shuffle_Seller_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    const sCF = await SellerResidentialCondoForm.countDocuments()
    console.log(sCF)
    console.log(req.body.length)
    if(req.body.length!==sCF){
        return next(new ErrorHandler('Something wrong in form', 401))
    }

    const questionArray = req.body
    questionArray.forEach(async (data)=>{
        await SellerResidentialCondoForm.findByIdAndUpdate( 
            { _id: data.quesID }, 
            { quesIndex: data.quesIndex },
            {
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: `Seller Residential Condo Form Questionnaire shuffled`,
    })
})


// 19) Admin: Reset Seller Residential Condo Form
export const nestNotify_Admin_Reset_Seller_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    const sellerPropForm = await SellerResidentialCondoForm.find().sort({createdAt: 0})

    Object.entries(sellerPropForm).forEach(async (data)=>{
        console.log(data[0])
        await SellerResidentialCondoForm.findByIdAndUpdate({_id: data[1]._id}, {quesIndex: data[1].fixIndex}, 
            {                 
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    return res.status(200).json({
        success: true,
        status: "success",
        message: `Seller Residential Condo Form Questionnaire Reset`,
    })
})


// ==============================================================================================
// Seller Commercial Industrial Questionnaires (Get, Suffle, Reset)
// ==============================================================================================

// 20) Admin: Get Seller Commercial Form (Single Questionnaire)
export const nestNotify_Admin_Get_Seller_Commercial_Property_Form = CatchAsync( async(req, res, next)=>{
   
    const sellerPropertyForm = await SellerCommercialForm.find().sort({quesIndex: 0});

    if(!sellerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Seller Commercail Form Questionnaire",
        // propertyQuesCount,
        length: sellerPropertyForm.length,
        sellerPropertyForm
    })
})


// 21) Admin: shuffle Seller Commercial Form 
export const nestNotify_Admin_Shuffle_Seller_Commercail_Form = CatchAsync( async(req, res, next)=>{

    const sCF = await SellerCommercialForm.countDocuments()
    if(req.body.length!==sCF){
        return next(new ErrorHandler('Something wrong in form', 401))
    }

    // console.log(req.body)
    const questionArray = req.body
    questionArray.forEach(async (data)=>{
        await SellerCommercialForm.findByIdAndUpdate( 
            { _id: data.quesID }, 
            { quesIndex: data.quesIndex },
            {
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: `Seller Commercail Form Questionnaire Shuffled`,
    })
})


// 22) Admin: Reset Seller Commercial/Industrial Form
export const nestNotify_Admin_Reset_Seller_Commercail_Form = CatchAsync( async(req, res, next)=>{

    const sellerPropForm = await SellerCommercialForm.find().sort({createdAt: 0})

    Object.entries(sellerPropForm).forEach(async (data)=>{
        console.log(data[0])
        await SellerCommercialForm.findByIdAndUpdate({_id: data[1]._id}, {quesIndex: data[1].fixIndex}, 
            {                 
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    return res.status(200).json({
        success: true,
        status: "success",
        message: `Seller Commercail Form Questionnaire Reset`,
    })
})



// ==============================================================================================
// Buyer Residential Home Questionnaires (Get, Suffle, Reset)
// ==============================================================================================

// 23) Admin: Get Buyer Residential Home Form 
export const nestNotify_Admin_Get_Buyer_Residential_Home_Form = CatchAsync( async(req, res, next)=>{
   
    const buyerPropertyForm = await BuyerResidentialHomeForm.find().sort({quesIndex: 0});

    if(!buyerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Buyer Residential Home Form Questionnaire",
        length: buyerPropertyForm.length,
        buyerPropertyForm
    })
})

// 24) Admin: shuffle Buyer Residential Home Form
export const nestNotify_Admin_Shuffle_Buyer_Residentail_Home_Form = CatchAsync( async(req, res, next)=>{

    const sCF = await BuyerResidentialHomeForm.countDocuments()
    if(req.body.length!==sCF){
        return next(new ErrorHandler('Something wrong in form', 401))
    }

    // console.log(req.body)
    const questionArray = req.body
    questionArray.forEach(async (data)=>{
        await BuyerResidentialHomeForm.findByIdAndUpdate( 
            { _id: data.quesID }, 
            { quesIndex: data.quesIndex },
            {
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: `Buyer Residential Home Form Questionnaire Shuffled`,
    })
})


// 25) Admin: Reset Buyer Residential Home Form
export const nestNotify_Admin_Reset_Buyer_Residential_Home_Form = CatchAsync( async(req, res, next)=>{

    const sellerPropForm = await BuyerResidentialHomeForm.find().sort({createdAt: 0})

    Object.entries(sellerPropForm).forEach(async (data)=>{
        console.log(data[0])
        await BuyerResidentialHomeForm.findByIdAndUpdate({_id: data[1]._id}, {quesIndex: data[1].fixIndex}, 
            {                 
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    return res.status(200).json({
        success: true,
        status: "success",
        message: `Buyer Residential Home Form Questionnaire Reset`,
    })
})



// ==============================================================================================
// Buyer Residential Condo Questionnaires (Get, Suffle, Reset)
// ==============================================================================================

// 26) Admin: Get Buyer Reseidential Condo
export const nestNotify_Admin_Get_Buyer_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{
   
    const buyerPropertyForm = await BuyerResidentialCondoForm.find().sort({quesIndex: 0});

    if(!buyerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Buyer Residential Condo Form Questionnaire Form",
        length: buyerPropertyForm.length,
        buyerPropertyForm
    })
})


// 27) Admin: shuffle Buyer Residential Condo
export const nestNotify_Admin_Shuffle_Buyer_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    const sCF = await BuyerResidentialCondoForm.countDocuments()
    if(req.body.length!==sCF){
        return next(new ErrorHandler('Something wrong in form', 401))
    }

    // console.log(req.body)
    const questionArray = req.body
    questionArray.forEach(async (data)=>{
        await BuyerResidentialCondoForm.findByIdAndUpdate( 
            { _id: data.quesID }, 
            { quesIndex: data.quesIndex },
            {
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: `Buyer Residential Condo Form Questionnaire Shuffled`,
    })
})


// 28) Admin: Reset Buyer Residential Condo Form
export const nestNotify_Admin_Reset_Buyer_Residential_Condo_Form = CatchAsync( async(req, res, next)=>{

    const sellerPropForm = await BuyerResidentialCondoForm.find().sort({createdAt: 0})

    Object.entries(sellerPropForm).forEach(async (data)=>{
        console.log(data[0])
        await BuyerResidentialCondoForm.findByIdAndUpdate({_id: data[1]._id}, {quesIndex: data[1].fixIndex}, 
            {                 
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    return res.status(200).json({
        success: true,
        status: "success",
        message: `Buyer Residential Condo Form Questionnaire Reset`,
    })
})



// ==============================================================================================
// Buyer Commercial/Industrial Questionnaires (Get, Suffle, Reset)
// ==============================================================================================

// 29) Admin: Get Buyer Commercial Form
export const nestNotify_Admin_Get_Buyer_Commercial_Form = CatchAsync( async(req, res, next)=>{
   
    const buyerPropertyForm = await BuyerCommercialForm.find().sort({quesIndex: 0});

    if(!buyerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Buyer Commercial Form Questionnaire",
        length: buyerPropertyForm.length,
        buyerPropertyForm
    })
})


// 30) Admin: shuffle Seller Commercail Form
export const nestNotify_Admin_Shuffle_Buyer_Commercail_Form = CatchAsync( async(req, res, next)=>{

    const sCF = await BuyerCommercialForm.countDocuments()
    if(req.body.length!==sCF){
        return next(new ErrorHandler('Something wrong in form', 401))
    }

    // console.log(req.body)
    const questionArray = req.body
    questionArray.forEach(async (data)=>{
        await BuyerCommercialForm.findByIdAndUpdate( 
            { _id: data.quesID }, 
            { quesIndex: data.quesIndex },
            {
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: `Buyer Commercial Form Questionnaire Shuffled`,
    })
})


// 31) Admin: Reset Buyer Commercial Industrial Form
export const nestNotify_Admin_Reset_Buyer_Commercail_Form = CatchAsync( async(req, res, next)=>{

    const sellerPropForm = await BuyerCommercialForm.find().sort({createdAt: 0})

    Object.entries(sellerPropForm).forEach(async (data)=>{
        console.log(data[0])
        await BuyerCommercialForm.findByIdAndUpdate({_id: data[1]._id}, {quesIndex: data[1].fixIndex}, 
            {                 
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    return res.status(200).json({
        success: true,
        status: "success",
        message: `Buyer Commercial Form Questionnaire Reset`,
    })
})



// ==============================================================================================
// Buyer Land Lot Questionnaires (Get, Suffle, Reset)
// ==============================================================================================

// 32) Admin: Get Buyer Commercial Form
export const nestNotify_Admin_Get_Buyer_Land_Form = CatchAsync( async(req, res, next)=>{
   
    const buyerPropertyForm = await BuyerLandQues.find().sort({quesIndex: 0});

    if(!buyerPropertyForm){
        return next(new ErrorHandler('Something went wrong', 404))
    }

    res.status(200).json({
        success: true,
        status: "success",
        message: "Buyer Land Form Questionnaire",
        length: buyerPropertyForm.length,
        buyerPropertyForm
    })
})


// 33) Admin: shuffle Seller Commercail Form
export const nestNotify_Admin_Shuffle_Buyer_Land_Form = CatchAsync( async(req, res, next)=>{

    const sCF = await BuyerLandQues.countDocuments()
    if(req.body.length!==sCF){
        return next(new ErrorHandler('Something wrong in form', 401))
    }

    // console.log(req.body)
    const questionArray = req.body
    questionArray.forEach(async (data)=>{
        await BuyerLandQues.findByIdAndUpdate( 
            { _id: data.quesID }, 
            { quesIndex: data.quesIndex },
            {
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    res.status(200).json({
        success: true,
        status: "success",
        message: `Buyer Land Form Questionnaire Shuffled`,
    })
})


// 34) Admin: Reset Buyer Commercial Industrial Form
export const nestNotify_Admin_Reset_Buyer_Land_Form = CatchAsync( async(req, res, next)=>{

    const sellerPropForm = await BuyerLandQues.find().sort({createdAt: 0})

    Object.entries(sellerPropForm).forEach(async (data)=>{
        console.log(data[0])
        await BuyerLandQues.findByIdAndUpdate({_id: data[1]._id}, {quesIndex: data[1].fixIndex}, 
            {                 
                new: true,
                runValidators: true,
                userFindAndModify: true
            }
        )
    })

    return res.status(200).json({
        success: true,
        status: "success",
        message: `Buyer Land Form Questionnaire Reset`,
    })
})




// ===================================================================================================================================================================
// -----| Question Post |-----
export const nestNotify_Admin_Post_Questions = CatchAsync( async(req, res, next)=>{

    if(!req.body){
        return res.status(201).json({
            success: false,
            message: "Provide proper details"
        })
    }
    // const Questions = await QuestionsModel.create(req.body)
    
    // const sellerPropertyForm = await SellerPropertyQues.create(req.body)
    // const sellerPropertyForm = await SellerResidentialHomeForm.create(req.body)
    // const sellerPropertyForm = await SellerResidentialCondoForm.create(req.body)
    const sellerPropertyForm = await SellerCommercialForm.create(req.body)
    // const sellerPropertyForm = await BuyerResidentialHomeForm.create(req.body)
    // const sellerPropertyForm = await BuyerResidentialCondoForm.create(req.body)
    // const sellerPropertyForm = await BuyerLandQues.create(req.body)

    res.status(201).json({
        success: true,
        message: "Questions Post",
        sellerPropertyForm,
        // Questions
    })
})