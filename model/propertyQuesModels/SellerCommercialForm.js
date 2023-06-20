import mongoose from 'mongoose';

const SellerFormModel = new mongoose.Schema({
    quesIndex: Number,
    extraInformation: String,
    question: String,
    quesType: String,
    quesOption: Boolean,
    quesAnsOption: Array,
    answerVal: Object
}, {timestamps: true});
 
const SellerCommercialForm = mongoose.model('SellerCommercialForm', SellerFormModel);
export default SellerCommercialForm;