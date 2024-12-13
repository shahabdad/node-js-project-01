// // const express = require('express');
// // // const Contact = require('../models/contact');
// // const Contact = require('../models/contact'); 
// // const router = express.Router();

// // // Save Contact Message
// // router.post('/', async (req, res) => {
// //   try {
// //     const newContact = new Contact(req.body);
// //     await newContact.save();
// //     res.status(201).json({ message: 'Contact message saved successfully!', contact: newContact });
// //   } catch (error) {
// //     res.status(400).json({ message: 'Error saving contact message', error });
// //   }
// // });

// // router.get('/', async (req, res) => {
// //   try {
// //     const contacts = await Contact.find();
// //     res.json(contacts);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error fetching contact messages', error });
// //   }
// // });

// // module.exports = router;



const express = require('express');
const Contact = require('../model/contact'); 
const router = express.Router();

// Save Contact Message
router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Contact message saved successfully!', contact: newContact });
  } catch (error) {
    res.status(400).json({ message: 'Error saving contact message', error });
  }
});

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact messages', error });
  }
});

module.exports = router;    