
const express = require('express');
const {showProduct, showHome} = require('../controller/productController');
const router = express.Router();

router.get('/product/show', showProduct)
router.get('/home', showHome);

module.exports = router;