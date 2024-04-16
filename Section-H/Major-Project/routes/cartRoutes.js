const express = require('express');
const router = express.Router();
const Product = require('../model/productModel.js');
const User = require('../model/userModel.js');
// const isLoggedIn = require('../middleware/middleware.js');

router.post("/product/:id/cart",async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    const user=req.user;
    user.cart.push(product)
    await user.save();
    res.redirect("/product")

})
router.get("/cart", async(req, res)=>{
    const user = await User.findById(req.user._id).populate("cart");
    res.render("products/cart", {user});
})

module.exports = router;


