import mongoose from 'mongoose';

const RenterResidentialHomeModel = mongoose.Schema(
    {
        questionCondition: String,
        quesIndex: Number,
        extraInformation: String,
        question: String,
        questionType: String,
        questionOption: Boolean,
        quesAnsOption: Array,
        answerVal: Object
    }, 
    {
        timestamps: true
    }
);
 
const RenterResidentialHomeForm = mongoose.model('RenterResidentialHomeForm', RenterResidentialHomeModel);
export default RenterResidentialHomeForm;