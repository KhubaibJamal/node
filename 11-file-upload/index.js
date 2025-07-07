require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const connectDB = require("./config/db");
const model = require("./models/model");
const upload = require('./middlewares/storage-middleware');

const PORT = process.env.PORT;

app.use(express.json());

connectDB();

// API to upload image locally
// app.post('/profile/upload', upload.single('file'), function (req, res) {
//     try {
//         res.json(req.file);
//     } catch (error) {
//         console.log("Getting Error While Uploading:", error);
//     }
// })

// API to retrieve data from server

// ✅ Get all products
app.get('/users', async (req, res) => {
    try {
        const user = await model.find();
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.post('/profile/upload/:id', upload.single('file'), async (req, res) => {
    try {
        const profile = await model.findById(req.params.id);
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }

        const filename = `${Date.now()}-${req.file.originalname}`;

        const filePath = `/profile/image/${req.params.id}/${filename}`;

        profile.profilePic = filePath;

        await profile.save();
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



// API to upload image on server
app.post('/profile', async (req, res) => {
    try {
        let user = await model.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

});


// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
