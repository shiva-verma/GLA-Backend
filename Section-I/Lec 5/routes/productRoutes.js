const express = require('express');
const { showProduct, showSingleProduct, createProduct, updateProduct, deleteProduct} = require('../controller/productController');
const router = express.Router();

router.get('/showProduct', showProduct)

router.get('/showSingleProduct', showSingleProduct)

router.post('/createProduct', createProduct)

router.put('/updateProduct', updateProduct)

router.delete('/deleteProduct', deleteProduct)

module.exports = router;