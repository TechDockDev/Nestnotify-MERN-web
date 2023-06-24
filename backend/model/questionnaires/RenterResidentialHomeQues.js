import mongoose from 'mongoose';

const RenterResidentialHomeModel = mongoose.Schema(
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
 
const RenterResidentialHomeQues = mongoose.model('RenterResidentialHomeQues', RenterResidentialHomeModel);
export default RenterResidentialHomeQues;