const express = require('express');
// const { route } = require('./productRoutes');
const User = require('../model/userModel');
const router = express.Router();
const passport = require('passport')

router.get('/login', (req, res)=>{
    res.render('auth/login');
})

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/product');
  });

router.get('/signup', (req, res)=>{
    res.render('auth/signup');
})

router.post('/register', async(req,res) => {

    const {username, email, password} = req.body;

    const user = new User({username, email});

    await User.register(user, password);

    res.redirect('/login');
})

module.exports = router;