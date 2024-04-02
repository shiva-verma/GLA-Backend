const express = require("express");
const dbConnect = require("./db/db.js");
const app = express();
const path = require("path");
const Product = require("./model/productModel.js");
const methodOverride = require('method-override');
const productRouter = require('./routes/productRoutes.js')
const reviewRouter = require('./routes/reviewRoutes.js')
const ejsmate = require('ejs-mate');
const port = 5000;

dbConnect();

app.engine('ejs', ejsmate);
app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(productRouter);
app.use(reviewRouter);



app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});
