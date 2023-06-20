import mongoose from 'mongoose';

const SellerFormModel = mongoose.Schema({
    questionCondition: String,
    quesIndex: Number,
    extraInformation: String,
    question: String,
    questionType: String,
    questionOption: Boolean,
    quesAnsOption: Array,
    answerVal: Object
}, {timestamps: true});
 
const SellerForm = mongoose.model('SellerForm', SellerFormModel);
export default SellerForm;