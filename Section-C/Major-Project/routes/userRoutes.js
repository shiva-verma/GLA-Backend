const express = require('express');
const User = require('../model/userModel');
const passport = require('passport');
const router = express.Router();

router.get("/login", (req, res)=>{
    res.render("auth/login")
})

router.get("/signup", (req, res)=>{
    res.render("auth/signup")
})

router.post('/register', async(req, res)=>{
    const {username, email, password, userType} = req.body;


    // await User.create({username, email, password});

    const user = new User({username, email, userType});

    await User.register(user, password);

    res.redirect('login');


})


router.post('/login', 
   passport.authenticate('local', { failureRedirect: '/login' }), 
   (req, res) => {
    req.flash("success", "welcome back")
    // console.log(req.user);
    res.redirect('/product');
})

router.post('/logout', function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      req.flash('error', "logout successfully");
      res.redirect('/login');
    });
  });

module.exports = router;