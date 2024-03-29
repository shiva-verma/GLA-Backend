const express = require("express");
const dbConnect = require("./db/db.js");
const app = express();
const path = require("path");
const Product = require("./model/productModel.js");
const port = 5000;

dbConnect();

app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}));

app.get("/product/new", (req, res) => {
  res.render("addProduct");
});

app.get("/product", async(req, res)=>{
  const allProduct = await Product.find({})
  // console.log(allProduct);
  res.render("home", {allProduct});
})

app.post("/product",async(req, res)=>{
    await Product.create(req.body);
    res.redirect('/product');
})

app.get("/product/:id", async(req, res)=>{
    const id = req.params.id;
    const singleProduct = await Product.findById(id);
    console.log(singleProduct);
    res.render("singleProduct", {singleProduct});
})

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});
