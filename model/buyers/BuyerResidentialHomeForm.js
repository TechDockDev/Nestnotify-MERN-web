import mongoose from 'mongoose';

const BuyerResidentialHomeModel = new mongoose.Schema({
    quesIndex: Number,
    extraInformation: String,
    question: String,
    quesType: String,
    quesOption: Boolean,
    quesAnsOption: Array,
    answerVal: Object
}, {timestamps: true});
 
const BuyerResidentialHomeForm = mongoose.model('Form', BuyerResidentialHomeModel);
export default BuyerResidentialHomeForm;