const express = require("express");
const dbConnect = require("./db/db.js");
const path = require("path");
const Product = require("./model/productModel.js");
const User = require('./model/userModel.js');
const app = express();
const methodOverride = require("method-override");
const ejsmate = require('ejs-mate');
const productRouter = require('./routes/productRoutes.js');
const reviewRouter = require("./routes/reviewRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const flash = require('connect-flash');
const session = require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const port = 4000;

dbConnect();
app.engine('ejs', ejsmate)
app.set("view engine", "ejs");
app.set("views", "views")


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly:true,
        maxAge: 7 * 24 * 60 * 60 * 1000 * 1
    }
}))

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
// passport.use(passport.authenticate("sesssion"));
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use((req, res, next)=>{
    res.locals.currUser = req.user;
    console.log(req.user);
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.info = req.flash("info");
    res.locals.warning = req.flash("warning");

    next();
})

app.use(productRouter);
app.use(reviewRouter);
app.use(userRouter);


app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);   
});