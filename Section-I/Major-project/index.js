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

app.use(express.static(path.join(__dirname, "public")));

app.engine('ejs', ejsmate);
app.set("view engine", "ejs");
app.set("views", "views")


app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(productRouter);
app.use(reviewRouter);
dbConnect();


app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});