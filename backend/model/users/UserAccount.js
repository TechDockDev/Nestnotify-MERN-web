import mongoose from 'mongoose';

const UserAccountSchema = new mongoose.Schema({
    auth: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth'
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

const UserAccount = mongoose.model('UserAccount', UserAccountSchema)

export default UserAccount;