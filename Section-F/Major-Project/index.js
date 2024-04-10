const express = require("express");
const dbConnect = require("./db/db.js");
const path = require("path");
const Product = require("./model/productModel.js");
const app = express();
const methodOverride = require('method-override');
const ejsmate = require('ejs-mate');
const productRouter = require('./routes/productRoutes.js');
const reviewRouter = require('./routes/reviewRoute.js')
const session = require('express-session');
const flash = require('connect-flash');
const port = 4000;


app.engine('ejs', ejsmate);
app.set("view engine", "ejs");
app.set("views", "views")

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))

app.use(flash());

  app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
  })

  dbConnect();

app.use(productRouter);
app.use(reviewRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
    
});