import express from "express";
import connectDB from "./config/db";
import userRoutes from './routes/user-route';
const app = express();
const port = 5000;

connectDB();

app.use('/user', userRoutes);

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});

