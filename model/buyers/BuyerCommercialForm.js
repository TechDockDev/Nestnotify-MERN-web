import mongoose from 'mongoose';

const BuyerCommercailModel = new mongoose.Schema({
    quesIndex: Number,
    extraInformation: String,
    question: String,
    quesType: String,
    quesOption: Boolean,
    quesAnsOption: Array,
    answerVal: Object
}, {timestamps: true});
 
const BuyerCommercailForm = mongoose.model('BuyerCommercailForm', BuyerCommercailModel);
export default BuyerCommercailForm;