const express = require('express');
const router = express.Router();
const Product = require('../model/productModel.js')

router.get("/product/new", (req, res) => {
    res.render("products/addProduct");
  });
  
  router.post("/product", async(req, res)=>{
    //  const productName = req.body.productName
    //  const price = req.body.price
    //  const description = req.body.description
    //  const imageUrl = req.body.imageUrl
  
    //  const newProduct = new Product({
    //      productName,
    //      price,
    //      description,
    //      imageUrl
    //  })
  
    // await newProduct.save();
  
    await Product.create(req.body)

    req.flash("success", "Product created successfully");

    // req.flash("success");
    res.redirect('/product')
    // res.send("hiii")
  
  })
  
  router.get("/product", async(req, res)=>{
    const allProduct = await Product.find({});
    // console.log(allProduct);
    res.render("products/home", {allProduct});
  })
  
  router.get('/product/:id', async(req, res)=>{
    const {id} = req.params
    const singleProduct = await Product.findById(id).populate("reviews");
    console.log(singleProduct);
    res.render("products/singleProduct", {product:singleProduct});
  })
  
  router.get('/product/:id/edit', async(req, res)=>{
    // find product with given id in the params
    const {id} = req.params
    const product = await Product.findById(id);
    
  
  
    res.render('products/edit', {i:product});
  })
  
  router.patch('/product/:id', async(req, res)=>{
    const {id} = req.params;
  
    const {productName, price, description, imageUrl} = req.body
  
    await Product.findByIdAndUpdate(id, {productName, price, description, imageUrl});
    res.redirect(`/product/${id}`);
  })
  
  router.delete('/product/:id', async(req, res)=>{
      const {id} = req.params;
  
      await Product.findByIdAndDelete(id);
      req.flash("info", "product deleted successfully");
      res.redirect('/product');
  })

module.exports = router;