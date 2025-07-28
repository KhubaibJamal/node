require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require('./config/db');
const userRoutes = require('./routes/user-route');
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDb();

// users routes
app.use("/user", userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});

