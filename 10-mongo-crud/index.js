require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require('./config/db');
const productModel = require('./models/products-model');

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDb();


// ✅ Get all products
app.get('/products', async (req, res) => {
    try {
        const products = await productModel.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// ✅ search by name api
app.get('/products/search', async (req, res) => {
    try {
        const { name } = req.query;

        // Optional: Return early if no name is provided
        if (!name) {
            return res.status(400).json({ error: 'Please provide a name to search' });
        }

        // Case-insensitive search
        const products = await productModel.find({
            name: { $regex: new RegExp(name, 'i') }
        });

        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Get a single product by ID
app.get('/products/:id', async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


// ✅ Create a single product
app.post('/products', async (req, res) => {
    try {
        const product = await productModel.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ✅ Insert a single product (same as above, different route if needed)
app.post('/products/insert', async (req, res) => {
    try {
        const product = await productModel.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ✅ Insert multiple products
app.post('/products/bulk-insert', async (req, res) => {
    try {
        const products = await productModel.insertMany(req.body);
        res.status(201).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ✅ Update a product by ID
app.put('/products/:id', async (req, res) => {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedProduct);
        // res.json({ "status": "success" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ✅ Delete a product by ID
app.delete('/products/:id', async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.params.id);
        res.json({ "status": "success" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ✅ Delete multiple products by IDs (pass array of IDs in body)
app.delete('/products', async (req, res) => {
    try {
        const { ids } = req.body;

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({ error: "Please provide an array of product IDs" });
        }

        const result = await productModel.deleteMany({ _id: { $in: ids } });
        res.json({
            "status": "success",
            "deletedCount": result.deletedCount,
            "message": `Successfully deleted ${result.deletedCount} products`
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
