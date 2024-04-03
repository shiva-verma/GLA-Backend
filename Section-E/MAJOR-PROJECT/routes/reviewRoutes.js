const express = require('express')
const router = express.Router();
const Review = require('../model/reviewModel.js');
const Product = require('../model/productModel.js');

router.post("/review/:id", async(req, res)=>{
    const id = req.params.id;
    const product = await Product.findById(id);

    const {rating, comment} = req.body;

    const newReview = await Review.create({rating, comment});
    product.reviews.push(newReview);
    await product.save();

    res.redirect(`/product/${id}`); 
})

module.exports = router;