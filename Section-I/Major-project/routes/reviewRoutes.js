const express = require('express');
const Product = require('../model/productModel');
const router = express.Router();
const Review = require('../model/reviewModel.js')

router.post('/review/:id',async(req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    
    const{rating, comment} = req.body;
    console.log(req.body);
    const review = await Review.create({rating, comment});
    console.log(review);

    product.reviews.push(review);

    await product.save();

    res.redirect(`/product/${id}`);
})


router.delete('/review/:id/:productId', async(req, res)=>{
    const {id, productId} = req.params;

    await Review.findByIdAndDelete(id)

    // res.send(`${id} deleted`)
    res.redirect(`/product/${productId}`)
})


module.exports = router;