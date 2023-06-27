import mongoose from 'mongoose';

const SellerFormsAnsModel = new mongoose.Schema(
    {
        auth: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Auth"
        },
        formAns: [
            {
                sellerpropertyques: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "SellerPropertyQues"
                },
                quesAnsOption: {
                    type: Array
                },
                question: String,
                answer: String
            }
        ],
    }, 
    {
        timestamps: true
    }
)

const SellerFormsAns= mongoose.model('SellerFormsAns', SellerFormsAnsModel)

export default SellerFormsAns