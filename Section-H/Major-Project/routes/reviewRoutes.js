const express = require('express');
const Review = require('../model/reviewsModel');
const router = express.Router();
const Product = require('../model/productModel.js');
const isLoggedIn = require('../middleware/middleware.js');

router.post("/review/:id", async(req,res) => {
    const {id} = req.params;
    const product = await Product.findById(id);


    const {rating, comment}= req.body;
    const review = await Review.create({rating, comment});


   product.review.push(review);

   await product.save();

   res.redirect(`/product/${id}`);


})

router.delete('/review/:reviewId/:productId',async(req, res)=>{
    const {reviewId} = req.params;
    const {productId} = req.params;
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/product/${productId}`);
})

module.exports = router;




// [1,2,3,4,5,6,7]= Array

// 5
