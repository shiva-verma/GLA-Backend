const express = require("express");
const dbConnect = require("./db/db.js");
const Product = require("./model/productModel.js");
const User = require('./model/userModel.js');
const path = require("path")
const app = express();
const productRouter = require('./routes/productRoutes.js');
const reviewRouter = require('./routes/reviewRoutes.js')
const userRouter = require('./routes/userRoutes.js');
const port = 5000;
// app.use(express.json());
const methodOverride = require('method-override');
const ejsmate = require('ejs-mate')
const passport = require('passport');
const LocalStrategy = require('passport-local');
const flash = require('connect-flash');
const session = require("express-session");

app.use(express.static(path.join(__dirname, "public")));

app.engine('ejs', ejsmate);
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

// passport.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

  // use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(flash());

app.use((req, res, next)=>{
    // console.log(req.user);
    res.locals.currUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use(productRouter);
app.use(reviewRouter);
app.use(userRouter);
dbConnect();


app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});