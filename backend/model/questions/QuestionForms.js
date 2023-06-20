import mongoose, { mongo } from 'mongoose'

const QuestionSchema = new mongoose.Schema(
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
    { timestamps: true });

const QuestionForm = mongoose.model('QuestionForm', QuestionSchema)

export default QuestionForm;