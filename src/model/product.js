const mongoose = require('mongoose');

// Tạo Schema cho product
const productSchema = new mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    brand: { type: String, required: true },
    image: { type: String, required: true },

});

// Tạo model cho product
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
