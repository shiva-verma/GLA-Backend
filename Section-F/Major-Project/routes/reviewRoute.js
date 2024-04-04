const express = require('express');
const router = express.Router();
const Review=require('../model/reviewModel.js')
const Product = require('../model/productModel.js');

router.post('/review/:id', async(req, res)=>{
   const {id} = req.params
   const product = await Product.findById(id)

   const {rating, comment} = req.body;
   let review = await Review.create({rating,comment});

   product.reviews.push(review);
   await product.save()
   res.redirect(`/product/${id}`);
})

router.delete('/review/:id/:productId', async(req,res)=>{
    const {id, productId } = req.params;
    await Review.findByIdAndDelete(id);

    res.redirect(`/product/${productId}`)

})

module.exports = router;