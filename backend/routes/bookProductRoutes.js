const express = require('express');
const BookProduct = require('../model/BookProduct');

const router = express.Router();

// Get all book products
router.get('/', async (req, res) => {
  try {
    const books = await BookProduct.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching books' });
  }
});

// Get a single book product by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await BookProduct.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching the book' });
  }
});

// Add a new book product
router.post('/', async (req, res) => {
  try {
    const { title, author, price, description, image_url } = req.body;
    const newBook = new BookProduct({ title, author, price, description, image_url });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Error adding the book' });
  }
});

// Update a book product
router.put('/:id', async (req, res) => {
  try {
    const updatedBook = await BookProduct.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: 'Error updating the book' });
  }
});

// Delete a book product
router.delete('/:id', async (req, res) => {
  try {
    const deletedBook = await BookProduct.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the book' });
  }
});

module.exports = router;
