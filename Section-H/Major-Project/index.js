const express = require("express");
const dbConnect = require("./db/db.js");
const app = express();
const path = require("path");
const Product = require("./model/productModel.js")
const port = 5000;

dbConnect();

app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}));

app.get("/product/new", (req, res) => {
  res.render("addProduct");
});

app.post("/product",async(req, res)=>{
    await Product.create(req.body);
    res.send("hi")
})

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});