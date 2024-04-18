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
    // console.log(req.user);
    req.flash("success", `welcome back ${req.user.username}`)
    res.redirect('/product');
  });

router.get('/signup', (req, res)=>{
    res.render('auth/signup');
})

router.post('/register', async(req,res) => {

    const {userType,username, email, password} = req.body;

    const user = new User({userType,username, email});

    await User.register(user, password);



    res.redirect('/login');
})

router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.flash("error", "bye bye")
    res.redirect('/login');
  });
});

module.exports = router;