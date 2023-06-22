import mongoose from 'mongoose';

const SellerQuesModel = mongoose.Schema(
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
 
const SellerResidentialHomeQues = mongoose.model('SellerResidentialHomeQues', SellerQuesModel);
export default SellerResidentialHomeQues;