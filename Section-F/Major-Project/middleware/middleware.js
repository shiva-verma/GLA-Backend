const passport = require('passport');
module.exports.isLoggedIn = (req, res, next) =>{
    if(!req.isAuthenticated()){
        req.flash("success", "you need to login first")
        return res.redirect('/login')
    }
   return next();
}

module.exports.isSeller = (req, res, next) =>{
    if(req.user.userType == "seller"){
        return next();
    }
   req.flash("error", "you didn't have permission");
   return res.redirect('/product');
}

// module.exports = {isLoggedIn, isSeller};