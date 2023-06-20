import mongoose from 'mongoose';

const BuyerResidentialModel = new mongoose.Schema({
    quesIndex: Number,
    extraInformation: String,
    question: String,
    quesType: String,
    quesOption: Boolean,
    quesAnsOption: Array,
    answerVal: Object
}, {timestamps: true});
 
const BuyerResidentialForm = mongoose.model('BuyerResidentialForm', BuyerResidentialModel);
export default BuyerResidentialForm;