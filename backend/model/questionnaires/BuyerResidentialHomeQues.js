import mongoose from 'mongoose';

const BuyerResidentialHomeModel = new mongoose.Schema(    
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
    { timestamps: true }
);
 
const BuyerResidentialHomeQues = mongoose.model('BuyerResidentialHomeQues', BuyerResidentialHomeModel);
export default BuyerResidentialHomeQues;