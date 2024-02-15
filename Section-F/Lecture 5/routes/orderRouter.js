const express = require('express');
const allOrder = require('../controller/productController');
const showProduct = require('../middleware/helper');
// const allOrder = require('../controller/productController');

const router = express.Router();

router.get('/order', allOrder)