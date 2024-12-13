const express = require('express');
const HomeKitchen = require('../model/Home&kitchen'); 

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const products = await HomeKitchen.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
});

// Get a single home and kitchen product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await HomeKitchen.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching the product' });
  }
});

// Add a new home and kitchen product
router.post('/', async (req, res) => {
  try {
    const { name, brand, price, description, image_url, category, stock } = req.body;
    const newProduct = new HomeKitchen({ name, brand, price, description, image_url, category, stock });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error adding the product' });
  }
});

// Update a home and kitchen product
router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await HomeKitchen.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error updating the product' });
  }
});

// Delete a home and kitchen product
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await HomeKitchen.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the product' });
  }
});

module.exports = router;
