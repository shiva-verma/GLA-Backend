const express = require('express');
const Product = require('../model/productModel');
const router = express.Router();


router.get("/product/new", (req, res) => {
    res.render("addProduct");
  });
  
  router.post("/product", async(req, res)=>{
      // const {productName, price, description, imageUrl} = req.body;
  
      // const product = new Product({
      //   productName,
      //   price,
      //   description,
      //   imageUrl
      // })
  
      // await product.save();
  
      await Product.create(req.body);

      req.flash('success', 'Product created successfully');
      res.redirect('/product');
  
  })
  
  router.get("/product", async(req, res)=>{
    const allProduct = await Product.find({})
    // console.log(allProduct);
    // const msg = req.flash("success","goggggggg");
    // console.log(msg);
    res.render("products/home", {allProduct});
  })
  
  router.get('/product/:id', async(req, res)=>{
    const {id} = req.params;
    const product = await Product.findById(id).populate("reviews");
    console.log(product);
    res.render('singleProduct', {item:product});
  })
  
  router.get('/product/:id/edit', async(req, res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
       res.render("edit", {i:product});
  })
  
  router.patch('/product/:id', async(req, res)=>{
       //find product using given id in params
       const {id} = req.params;
       const product = await Product.findById(id);
  
      //  get all new values from form
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