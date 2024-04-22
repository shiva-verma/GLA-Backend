//current loggedIn user saves in req.user property
const passport = require('passport')
module.exports.isLoggedIn = (req, res, next) =>{
        if(!req.isAuthenticated()){
            req.flash("success", "you need to login first");
            return res.redirect('/login');
        }
        next();
}

module.exports.isSeller = (req, res, next)=>{
    if(req.user.userType === "seller"){
        next();
    }
    res.redirect('/product');
}
