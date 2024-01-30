const express = require('express');
const {showAllProduct, showSingleProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController');
const router = express.Router();

router.get('/product/showAllProduct', showAllProduct)

router.get('/product/showSingleProduct', showSingleProduct)

router.post('/product/createProduct', createProduct)

router.put('/product/updateProduct', updateProduct)

router.delete('/product/deleteProduct', deleteProduct)

module.exports = router;