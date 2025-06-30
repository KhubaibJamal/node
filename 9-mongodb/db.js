const mongoose = require('mongoose');


const MONGO_URI = 'mongodb://localhost:27017/practice';

// connect DB
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB Connected Successfully!');
    } catch (error) {
        console.log('Unable to connect:', error.message);
    }
};

module.exports = connectDB; 