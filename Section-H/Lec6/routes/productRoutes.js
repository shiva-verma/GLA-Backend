const express = require('express');
const {showAll, createProduct, updateProduct, deleteProduct} = require('../controller/productController');
const router = express.Router();

router.get('/showAll', showAll)

router.post('/create', createProduct)

router.put('/update', updateProduct)

router.delete('/delete', deleteProduct)

module.exports = router;