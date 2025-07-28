const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("💹 MongoDB connected");
    } catch (error) {
        console.log("❌ MongoDB connection error", error);
    }
};

module.exports = connectDb;