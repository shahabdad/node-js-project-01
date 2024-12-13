const mongoose = require('mongoose');
const homeKitchenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String, // URL of the image
    required: true
  },
  category: {
    type: String,
    enum: ['Home', 'Kitchen'],
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  ratings: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  dimensions: {
    length: {
      type: Number
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  },
  weight: {
    type: Number
  },
  material: {
    type: String
  },
  color: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const HomeKitchen = mongoose.model('HomeKitchen', homeKitchenSchema);

module.exports = HomeKitchen;
