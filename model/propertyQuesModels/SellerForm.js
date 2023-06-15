import mongoose from 'mongoose';

const SellerFormModel = mongoose.Schema({
    quesIndex: Number,
    extraInformation: String,
    question: String,
    quesType: String,
    quesOption: Boolean,
    quesAnsOption: Array,
    answerVal: Object
}, {timestamps: true});
 
const SellerForm = mongoose.model('SellerForm', SellerFormModel);
export default SellerForm;