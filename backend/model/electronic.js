const mongoose = require('mongoose');

const electronicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String }, // URL for the product image
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Electronic', electronicSchema);
