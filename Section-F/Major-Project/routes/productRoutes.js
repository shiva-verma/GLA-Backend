const express = require('express');
const router = express.Router();
const Product = require('../model/productModel.js');
const {isLoggedIn, isSeller} = require('../middleware/middleware.js');

router.get("/product/new", (req, res) => {
    res.render("products/addProduct");
  });
  
  router.post("/product", async(req, res)=>{
      // const productName = req.body.productName;
      // const price = req.body.price;
      // const description = req.body.description;
      // const imageUrl = req.body.imageUrl;
  
      // const newProduct = new Product({
      //   productName,
      //   price,
      //   description,
      //   imageUrl
      // })
  
      // await newProduct.save();
  
      try {
        await Product.create(req.body);
  
      // res.send("hiii");
        req.flash("success", "Product created suucessfully")
      } catch (error) {
        req.flash("error", "product not created ")
      }
      
 

      // req.flash("success"); //product created successfully
      
      res.redirect("/product");
  })
  
  router.get("/product", async(req, res)=>{
    const allProduct = await Product.find({});
    // console.log(allProduct);
    res.render("products/home", {allProduct});
  })
  
  router.get('/product/:id', isLoggedIn, async(req, res)=>{
    const {id} = req.params;
    const product = await Product.findById(id).populate('reviews');
    // console.log(product);
    res.render('products/singleProduct', {item:product});
  })
  
  router.get('/product/:id/edit', isLoggedIn, isSeller, async(req, res)=>{
      const {id} = req.params;
      const product = await Product.findById(id);
       res.render('products/edit', {i:product});
  })
  
  router.patch('/product/:id', isSeller, async(req, res)=>{
      const {id} = req.params;
  
      const {productName, price, description, imageUrl} = req.body;
  
      await Product.findByIdAndUpdate(id, {productName, price, description, imageUrl});
  
      res.redirect(`/product/${id}`);
  })
  
  router.delete('/product/:id',isLoggedIn, isSeller, async(req, res)=>{
        const {id} = req.params;
  
        await Product.findByIdAndDelete(id);
        req.flash("success", "product deleted successfully");
        res.redirect('/product');
  })

module.exports = router;