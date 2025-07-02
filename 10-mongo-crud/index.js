require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require('./config/db');
const productModel = require('./models/products-model');
const PORT = process.env.PORT || 5000;
// Connect to MongoDB
connectDb();

// Route to create a single product using productModel.create
app.get('/create_products', async (req, res) => {
    let data = await productModel.create({
        name: "Samsung s6",
        price: 5000,
        description: "Galaxy Samsung S6",
        category: "Mobile",
    });
    res.send(data);
});

// Route to insert a single product using productModel.insertOne
app.get('/insert_products', async (req, res) => {
    let data = await productModel.insertOne({
        name: "Redmi",
        price: 5000,
        description: "Redmi 12c",
        category: "Mobile",
    });
    res.send(data);
});

// Route to insert multiple products using productModel.insertMany
app.get('/insert_multiple_products', async (req, res) => {
    let data = await productModel.insertMany([
        {
            name: "Samsung s6",
            price: 5000,
            description: "Galaxy Samsung S6",
            category: "Mobile",
        },
        {
            name: "iPhone 13",
            price: 50000,
            description: "iPhone 13 pro non pta",
            category: "Mobile",
        },
    ]);
    res.send(data);
});

// Route to update a user's name using userModel.findOneAndUpdate
app.get('/update_products', async (req, res) => {
    const filter = { name: "iPhone 13" };
    const update = {
        price: 3000,
        description: "iPhone 13 pro non pta"
    };
    // You should set the new option to true to return the document after update was applied.
    let updatedProducts = await productModel.findByIdAndUpdate(filter, update, { new: true });

    // Finds a matching document, replaces it with the provided doc, and returns the document.
    // let updatedProducts = await productModel.findOneAndReplace(filter, update, { new: true });

    res.send(updatedProducts);
});

// delete one
app.get('/delete_products', async (req, res) => {
    const deleteData = { name: "Samsung s6" };
    let deleteProducts = await productModel.deleteOne(deleteData);

    res.send(deleteProducts);
});

// delete multiple
app.get('/delete_multiple_products', async (req, res) => {
    const deleteData = { description: "iPhone 13 pro non pta" };
    let deleteMultipleProducts = await productModel.deleteMany(deleteData);

    res.send(deleteMultipleProducts);
});


// 🔥 This fetches ALL data
app.get('/get_all_products', async (req, res) => {
    try {
        const allProducts = await productModel.find();
        res.json(allProducts);
    } catch (error) {
        res.status(500).send(error.message);
    }
});



// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

