const express = require('express');
const router = express.Router()
const  {showAllProduct, createProduct, updateProd, deleteProd}  = require('../controller/productController')
//product
router.get('/showAll', showAllProduct);

router.post('/create', createProduct);

router.put('/update', updateProd)

router.delete('/delete', deleteProd)

module.exports = router;