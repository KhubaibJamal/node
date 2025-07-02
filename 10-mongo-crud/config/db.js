const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/e-commerce";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected");
        
    } catch (error) {
        console.log("MongoDB connection error", error);
    }
};

module.exports = connectDB;