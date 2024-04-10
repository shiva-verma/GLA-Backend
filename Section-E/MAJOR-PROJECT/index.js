const express = require("express");
const dbConnect = require("./db/db.js");
const path = require("path");
const Product = require("./model/productModel.js");
const methodOverride = require('method-override');
const ejsmate = require('ejs-mate');
const productRouter = require('./routes/productRoutes.js');
const reviewRouter = require('./routes/reviewRoutes.js');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();

app.use(express.json());
app.engine('ejs', ejsmate)
app.set("views", "views");
app.set("view engine", "ejs");


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


app.use(flash());

app.use((req, res, next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
})

app.use(productRouter);
app.use(reviewRouter);

dbConnect();



const port = 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});