const express = require("express");
const dbConnect = require("./db/db.js");
const Product = require("./model/productModel.js");
const path = require("path")
const app = express();
const productRouter = require('./routes/productRoutes.js');
const reviewRouter = require('./routes/reviewRoutes.js')
const port = 5000;
// app.use(express.json());
const methodOverride = require('method-override');
const ejsmate = require('ejs-mate')
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
  }))

app.use(flash());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(productRouter);
app.use(reviewRouter);
dbConnect();

app.use((req, res, next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash('error');
    next();
})


app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});