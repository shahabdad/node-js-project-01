const express = require('express');
const Electronic = require('../model/electronic');
const router = express.Router();
router.post('/', async (req, res) => {
  try {
    const newElectronic = new Electronic(req.body);
    await newElectronic.save();
    res.status(201).json({ message: 'Electronic product added!', product: newElectronic });
  } catch (error) {
    res.status(400).json({ message: 'Error adding product', error });
  }
});
router.get('/', async (req, res) => {
  try {
    const electronics = await Electronic.find();
    res.json(electronics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

// app.get('/api/electronics', async (req, res) => {
//   try {
//     const electronics = await Electronic.find();
//     res.json(electronics);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching products', error });
//   }
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Electronic.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: 'Product updated!', product: updatedProduct });
  } catch (error) {
    res.status(400).json({ message: 'Error updating product', error });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Electronic.findByIdAndDelete(id);
    res.json({ message: 'Product deleted!' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
});
module.exports = router;
