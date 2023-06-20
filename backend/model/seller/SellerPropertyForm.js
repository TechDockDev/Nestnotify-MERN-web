import mongoose from 'mongoose';

const SellerProertyForm = new mongoose.Schema(
    {
        auth: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "Auth"
        },
        sellerForm: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "SellerForm"
        },
        formAnswers: Array
    },
    {timestamps: true}
)

const SellerPropertyForm = mongoose.model("SellerPropertyForm", SellerProertyForm)

export default SellerPropertyForm;