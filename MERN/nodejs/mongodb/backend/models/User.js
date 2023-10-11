const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 50,
            required: true
        },
        email: {
            type: String,
            maxLength: 50,
            required: true,
            unique: true
        },
        dob: {
            type: String,
            default: null
        },
        gender: {
            type: String,
            enum: ["M", "F", "O"]
        },
        status: {
            type: Boolean,
            default: true
        }
    }
)

const User = mongoose.model("User", UserSchema);
module.exports = User;