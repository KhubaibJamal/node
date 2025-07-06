require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const model = require("./models/model");
const upload = require('./middlewares/storage-middleware');

const PORT = process.env.PORT;

app.use(express.json());

connectDB();

// API to upload image on server
app.post('/profile/upload', upload.single('file'), function (req, res) {
    try {
        res.json(req.file);
    } catch (error) {
        console.log("Getting Error While Uploading:", error);
    }
})


// API to upload image on server
app.post('/profile', async (req, res) => {

});


// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
