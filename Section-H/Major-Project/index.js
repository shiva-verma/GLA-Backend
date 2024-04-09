const express = require("express");
const dbConnect = require("./db/db.js");
const app = express();
const path = require("path");
const Product = require("./model/productModel.js");
const User = require('./model/userModel.js');
const methodOverride = require('method-override');
const productRouter = require('./routes/productRoutes.js')
const reviewRouter = require('./routes/reviewRoutes.js')
const userRouter = require('./routes/userRoutes.js')
const session = require('express-session') 
const passport = require('passport');
const LocalStrategy = require('passport-local');
const ejsmate = require('ejs-mate');
const flash = require('connect-flash');
const port = 5000;


dbConnect();
const sessionConfig = {
    secret: 'keyboard-cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly:true,
        maxAge: 10000,
    }
  }

app.use(session(sessionConfig));
app.use(flash());
app.engine('ejs', ejsmate);
app.set("view engine", "ejs")
app.set("views", "views")


passport.use(new LocalStrategy(User.authenticate()));

passport.use(passport.authenticate("session"));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next()
})

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(productRouter);
app.use(reviewRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});
