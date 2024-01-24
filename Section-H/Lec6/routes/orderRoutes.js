const express = require('express');
const router = express.Router();

router.get('/order/showAll', (req, res)=>{
    res.send("ALL order listed")
})
router.post('/order/create', (req, res)=>{
    res.send("order created")
})
router.put('/order/update',(req, res)=>{
    res.send("order updated")
})
router.delete('/order/delete', (req, res)=>{
    res.send('order deleted')
})

module.exports = router;