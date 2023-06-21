import mongoose from 'mongoose';

const RenterResidentialCondoModel = mongoose.Schema(
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
 
const RenterResidentialCondoForm = mongoose.model('RenterResidentialCondoForm', RenterResidentialCondoModel);
export default RenterResidentialCondoForm;