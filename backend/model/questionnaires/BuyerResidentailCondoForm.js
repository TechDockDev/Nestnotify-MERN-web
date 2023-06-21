import mongoose from 'mongoose';

const BuyerResidentialCondoModel = new mongoose.Schema(
    {
        quesIndex: Number,
        extraInformation: String,
        question: String,
        quesType: String,
        quesOption: Boolean,
        quesAnsOption: Array,
        answerVal: Object
    }, 
    {
        timestamps: true
    }
);
 
const BuyerResidentialCondoForm = mongoose.model('BuyerResidentialCondoForm', BuyerResidentialCondoModel);
export default BuyerResidentialCondoForm;