import mongoose from 'mongoose';

const RenterResidentialCondoModel = mongoose.Schema(
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
 
const RenterResidentialCondoQues = mongoose.model('RenterResidentialCondoQues', RenterResidentialCondoModel);
export default RenterResidentialCondoQues;