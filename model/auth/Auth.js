import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const userSchema = new mongoose.Schema(
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
        master: {
            type: String,
            select: false
        },
        profilePicture: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'imageModel'
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date,
    }, 
    {
        timestamps: true
    }
)

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12)
    next()
});

userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword)
};

userSchema.methods.getResetPasswordToken = async function () {
    // generate token
    const resetToken = crypto.randomBytes(20).toString("hex");
    // generate hash token and add to db
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken;
}

const User = mongoose.model("User", userSchema);

export default User;