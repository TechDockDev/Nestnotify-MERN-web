import mongoose from 'mongoose';

const BuyerCommercailModel = new mongoose.Schema(
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
 
const BuyerCommercailQues = mongoose.model('BuyerCommercailQues', BuyerCommercailModel);
export default BuyerCommercailQues;