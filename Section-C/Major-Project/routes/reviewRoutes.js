const express = require('express');
const router = express.Router();
const Product = require('../model/productModel')
const Review = require('../model/reviewModel')

router.post('/review/:id', async(req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);

    const {rating, comment} = req.body;
    const review = await Review.create({rating, comment});

    product.reviews.push(review);
    await product.save();

    res.redirect(`/product/${id}`);

})

module.exports = router;