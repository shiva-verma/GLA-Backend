const express = require('express');
const Product = require('../model/productModel');
const isLoggedIn = require('../middleware/middleware');
const isSeller = require('../middleware/middleware');

// const {isLoggedIn, isSeller} = require('../middleware/middleware');
const router = express.Router();


router.get("/product/new", (req, res) => {
    res.render("products/addProduct");
  });
  
  router.post("/product", async(req, res)=>{
      // const {productName, price, description, imageUrl} = req.body;
  
      // const product = new Product({
      //   productName,
      //   price,
      //   description,
      //   imageUrl
      // })
  
      // window.localStorage.setItem({"product":product});
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
    res.render('products/singleProduct', {item:product});
  })
  
  router.get('/product/:id/edit', async(req, res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
       res.render("products/edit", {i:product});
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


  router.get('/cart', async(req, res)=>{
    const data = await User.findById(req.user._id).populate("cart");
    res.render("product/cart", {data});
  })
  
  router.post('/product/:id/cart', async(req, res)=>{
       const {id} = req.params;
       const product = await Product.findById(id);

       const user = req.user;

       user.cart.push(product);
       await user.save();
       res.redirect('/cart');
  })

  router.post('/product/:productId/like', async(req, res)=>{
        const {productId} = req.params;

        const user = req.user;

        const isExisted = user.like.some((item) => item.id.equals(productId));


        if(isExisted){
          const updateLike = user.like.filter((item) => item.id != productId);
          user.like = updateLike;
        }
        else{
          user.like.push(productId);
        }

        await user.save();


  })  

module.exports = router;