import mongoose from 'mongoose';

const SellerFormModel = mongoose.Schema(
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
 
const SellerPropertyQues = mongoose.model('SellerPropertyQues', SellerFormModel);
export default SellerPropertyQues;