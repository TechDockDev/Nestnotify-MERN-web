import mongoose from 'mongoose';

const SellerQuesModel = new mongoose.Schema(
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
 
const SellerCommercialQues = mongoose.model('SellerCommercialQues', SellerQuesModel);
export default SellerCommercialQues;