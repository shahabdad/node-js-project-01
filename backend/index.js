// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const contactRoutes = require('./routes/contactRoutes');
// const itemRoutes = require('./routes/itemRoutes');
// const productRoutes = require('./routes/productRoutes');
// const electronicRoutes = require('./routes/electronicRoutes');
// const bookProductRoutes = require('./routes/bookProductRoutes');
// const app = express();
// // Middleware
// app.use(cors({ 
//   origin: '*', 
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], 
//   credentials: true 
// }));
// app.use(express.json()); // Parse JSON request bodies
// // MongoDB Connection
// const mongoURI = 'mongodb://localhost:27017/Shahab';
// mongoose.connect(mongoURI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// // Routes
// app.use('/api/contacts', contactRoutes);
// app.use('/api/items', itemRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/electronics', electronicRoutes);
// app.use('/api/books', bookProductRoutes);

// // Start Server
// const PORT = 7002;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Import routes
const contactRoutes = require('./routes/contactRoutes');
const itemRoutes = require('./routes/itemRoutes');
const productRoutes = require('./routes/productRoutes');
const electronicRoutes = require('./routes/electronicRoutes');
const bookProductRoutes = require('./routes/bookProductRoutes');
const homeKitchenRoutes = require('./routes/Home&Routes'); // Add Home & Kitchen routes
// D:\website\backend\routes\Home&Routes.js
const app = express();
// Middleware
app.use(cors({ 
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true 
}));
app.use(express.json()); // Parse JSON request bodies

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/Shahab';
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/products', productRoutes);
app.use('/api/electronics', electronicRoutes);
app.use('/api/books', bookProductRoutes);
app.use('/api/home-kitchen', homeKitchenRoutes); 

// Start Server
const PORT = 7005;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
