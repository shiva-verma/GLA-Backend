const express = require('express')
const router = express.Router();
const User = require('../model/userModel');

router.get('/login', (req, res)=>{
    res.render('auth/login')
})

router.get('/signup', (req, res)=>{
    res.render('auth/signup')
})


router.post('/register',async(req, res)=>{
    const {username, email, password} = req.body;

    const user = new User({username, email});

    await User.register(user, password);
})


module.exports = router;