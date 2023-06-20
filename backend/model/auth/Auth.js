import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const authSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true
        },
        lastName: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        contactNumber: {
            type: String,
            require: true
        },
        secondaryContact: {
            type: String,
        },
        password: {
            type: String,
            minLength: [8, 'Please enter minimum 8 characters.'],
            require: true,
            select: false
        },
        role: {
            type: String,
            default: 'user'
        },
        userActive: {
            type: Boolean,
            default: true,
        },
        dateOfBirth: {
            type: Date,
        },
        master: {
            type: String,
            select: false
        },
        profilePicture: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'imageModel'
        },
        userAccount: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userAccount'
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date,
    }, 
    {
        timestamps: true
    }
)

authSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12)
    next()
});

authSchema.methods.correctPassword = async function(candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword)
};

authSchema.methods.getResetPasswordToken = async function () {
    // generate token
    const resetToken = crypto.randomBytes(20).toString("hex");
    // generate hash token and add to db
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken;
}

const Auth = mongoose.model("Auth", authSchema);

export default Auth;