import mongoose from 'mongoose';

const SellerPropertyAnsSchema = new mongoose.Schema(
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
        ]
    }, 
    {
        timestamps: true
    }
)

const SellerPropertyAns = mongoose.model('SellerPropertyAns', SellerPropertyAnsSchema)

export default SellerPropertyAns;