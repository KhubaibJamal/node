require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const model = require("./models/model");

const multer = require('multer');

const PORT = process.env.PORT;

app.use(express.json());

connectDB();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + file.originalname;
        cb(null, uniqueSuffix);
    }
})

const upload = multer({ storage })


// API to upload image on server
app.post('/profile/upload', upload.single('file'), function (req, res) {
    try {
        res.json(req.file);
        // res.send("DONE");
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
