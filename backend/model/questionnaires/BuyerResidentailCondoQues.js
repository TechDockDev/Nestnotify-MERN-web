import mongoose from 'mongoose';

const BuyerResidentialCondoModel = new mongoose.Schema(
    {
        quesIndex: Number,
        fixIndex: Number,
        questionCondition: Boolean,
        question: String,
        questionType: String,
        quesAnsOption: {
            type: Array,
            default: []
        },
    }, 
    {
        timestamps: true
    }
);
 
const BuyerResidentialCondoQues = mongoose.model('BuyerResidentialCondoQues', BuyerResidentialCondoModel);
export default BuyerResidentialCondoQues;