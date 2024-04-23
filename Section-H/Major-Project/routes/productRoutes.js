const express = require('express');
const router = express.Router();
const Product = require('../model/productModel.js')
const {isLoggedIn, isRetailer} = require('../middleware/middleware.js')
// const isLoggedIn = require('../middleware/middleware.js')
// const isRetailer = require('../middleware/middleware.js')



router.get("/product/new", (req, res) => {
    res.render("products/addProduct");
  });
  
  router.get("/product", async(req, res)=>{
    const allProduct = await Product.find({})
    // console.log(allProduct);
    res.render("products/home", {allProduct});
  })
  
  router.post("/product", async(req, res)=>{
    try {
      await Product.create(req.body);
      req.flash('success', "product created successfully")
      // req.flash('info', 'Flash is back!')
      res.redirect('/product');
    } catch (error) {
       req.flash("error", "something is going wrong")
       console.log(error);
    }
      
  })
  
  router.get("/product/:id", async(req, res)=>{
      const id = req.params.id;
      const singleProduct = await Product.findById(id).populate('review');
      console.log(singleProduct);
      res.render("products/singleProduct", {singleProduct});
  })
  
  router.get('/product/:id/edit', async(req, res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
      res.render('products/edit', {i:product});
  })
  
  router.patch('/product/:id', async(req, res)=>{
    const {id} = req.params;
  
    const {productName, price, description, imageUrl} = req.body;
  
    await Product.findByIdAndUpdate(id, {productName, price, description, imageUrl});

    res.redirect(`/product/${id}`);
  
  })
  
  router.delete('/product/:id', async(req, res)=>{
      const {id} = req.params;
  
      await Product.findByIdAndDelete(id);

      req.flash("success", "product deleted successfully");
  
      res.redirect('/product');
  })

  module.exports = router;