const passport = require('passport');
const isLoggedIn = (req, res, next) => {

    if(!req.isAuthenticated()){
            req.flash("error", "you need to login first");
            return res.redirect('/login')
    }
    next();

}
const isSeller = (req, res, next) => {

    if(req.user.userType == "seller"){
         next();   
    }
    
    res.redirect('/product');
}



module.exports = {isLoggedIn, isSeller};