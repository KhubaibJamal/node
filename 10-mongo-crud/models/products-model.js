const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.createdAt = ret.createdAt.toISOString();
            ret.updatedAt = ret.updatedAt.toISOString();
            return ret;
        },
    },
});
module.exports = mongoose.model('products', productSchema);