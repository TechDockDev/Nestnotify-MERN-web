import mongoose from 'mongoose';

const RenterCommercialModel = mongoose.Schema(
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
 
const RenterCommercialQues = mongoose.model('RenterCommercialQues', RenterCommercialModel);
export default RenterCommercialQues;