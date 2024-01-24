const express = require('express');
const router = express.Router();

router.get('/all', (req, res)=>{
    res.send("all products shown above")
})

router.post('/create', ()=>{
    res.send("all products")
})

router.put('/update', ()=>{
    res.send("all products")
})

router.delete('/delete', ()=>{
    res.send("all products")
})

module.exports = router