import mongoose from 'mongoose';

const AdminAccountSchema = new mongoose.Schema({
    auth: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'adminauth'
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String
    },
    zipCode: {
        type: Number
    }
})

const AdminAccount = mongoose.model('AdminAccount', AdminAccountSchema)

export default AdminAccount;