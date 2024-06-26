const express = require('express')
const router = express.Router();
const Product = require('../model/productModel.js');
const {isLoggedIn, isSeller} = require('../middleware/middleware.js');

router.get("/product/new", (req, res) => {
    res.render("products/addProduct");
  });
  
  router.post("/product", async(req, res)=>{
     await Product.create(req.body);
    //  res.redirect("/product");
    req.flash('success', 'Product created');
    res.redirect("/product")
  })
  
  router.get("/product", async(req, res)=>{
    const allProduct = await Product.find({})
    // console.log(allProduct);
     res.render("products/home", {allProduct});
  })
  
  router.get("/product/:id", isLoggedIn, async(req, res)=>{
      const id = req.params.id;
      // console.log(id);
      const singleProduct = await Product.findById(id).populate("reviews");
      console.log(singleProduct);
      res.render("products/singleProduct", {item:singleProduct})
  })
  
  router.get('/product/:id/edit', isLoggedIn, async(req, res)=>{
    const {id} = req. params
      const singleProduct = await Product.findById(id)
      res.render('products/edit', {i:singleProduct})
  })
  
  router.patch('/product/:id',isLoggedIn, isSeller,async(req, res)=>{
      //find product with given id in params
      const {id} = req.params;
      const product = await Product.findById(id);
  
      //get all new values from form
      const {productName, price, description, imageUrl} = req.body;
  
      // updated old values with new values
      await Product.findByIdAndUpdate(id, {productName, price, description, imageUrl});
  
      //redirect
      res.redirect(`/product/${id}`);
  })
  
  router.delete('/product/:id',isLoggedIn, isSeller, async(req, res)=>{
    const {id} = req.params;
  
    await Product.findByIdAndDelete(id);

    req.flash("error", "deleted successfully")
    res.redirect('/product');
  })

  router.get('/cart', async(req, res)=>{
    const user = await User.findById(req.user._id).populate("cart");
    const cartData = user.cart;
    res.render("products/cart", {cartData});
  })

  router.post('/product/:id/cart', async(req, res)=>{
      const {id} = req.params;
      const product = await Product.findById(id);

      const user = req.user;
      user.cart.push(product);
      await user.save();
      res.redirect('/product');
  })

  router.post("/product/:id/like", (req, res)=>{
    
  })

module.exports = router;