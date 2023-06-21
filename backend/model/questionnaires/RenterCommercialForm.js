import mongoose from 'mongoose';

const RenterCommercialModel = mongoose.Schema(
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
 
const RenterCommercialForm = mongoose.model('RenterCommercialForm', RenterCommercialModel);
export default RenterCommercialForm;