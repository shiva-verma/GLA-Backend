const passport = require('passport');

module.exports.isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        req.flash("error", "you need to login first");
        return res.redirect('/login');
    }  
    return next();
}

module.exports.isRetailer = (req, res, next)=>{
        if(req.user.userType === "retailer"){
          return next();
        }
        req.flash("error", "you can't do that");
        return res.redirect('/login');
}

// module.exports = {isLoggedIn, isRetailer};