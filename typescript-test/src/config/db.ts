import mongoose from "mongoose";

const MONGO_URI = 'mongodb://localhost:27017/practice';

const connectDB = async()=>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Unable to connect:', (error as Error).message);
    }
}

export default connectDB;