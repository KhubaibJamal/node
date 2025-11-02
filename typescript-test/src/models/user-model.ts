import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    comments: [{ body: String, date: Date }],
    data: {
        active: Boolean,
        typeValue: String
    },
    cuisines: [String]
}, { timestamps: true });

export default mongoose.model('users', userSchema);
