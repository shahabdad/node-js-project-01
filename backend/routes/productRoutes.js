const express =require('express');
const Product =require ('../model/product');
const router = express.Router();
router.post('/', async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ message: 'Error saving product', error });
    }
  });
  router.get('/',async (req,res)=>{
        try{
            const products = await Product.find();
            res.json(products);
        }catch(error){
            res.status(500).json({message:'Error fetching products',error});
        }
  })
module.exports = router;