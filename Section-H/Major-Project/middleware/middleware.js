const passport = require('passport');

const isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        req.flash("error", "you need to login first");
        return res.redirect('/login');
    }  
    next();
}

const isRetailer = (req, res, next)=>{
        if(req.user.userType === "retailer"){
          next();
        }
        req.flash("error", "you can't do that");
        res.redirect('/login');
}

module.exports = {isLoggedIn, isRetailer};