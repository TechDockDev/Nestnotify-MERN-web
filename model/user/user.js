import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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

const User = mongoose.model("User", userSchema);

export default User;