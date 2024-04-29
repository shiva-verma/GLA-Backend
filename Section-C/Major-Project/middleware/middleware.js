const passport = require('passport');
const isLoggedIn = (req, res, next)=>{

    if(!req.isAuthenticated()){
        req.flash("error", "you need to login first");
        return res.redirect("/login")
    }
   return next();
}


const isSeller = (req, res, next)=>{
    if(req.user.userType == "seller"){
      return next();
    }
    req.flash("error", "you didn't have the permission")
    res.redirect('/product');
}
module.exports = isLoggedIn;