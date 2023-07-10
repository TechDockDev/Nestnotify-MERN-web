import mongoose from 'mongoose';

const BuyerLandModel = new mongoose.Schema(
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
 
const BuyerLandQues = mongoose.model('BuyerLandQues', BuyerLandModel);
export default BuyerLandQues;