const express = require("express");
const dbConnect = require("./db/db.js");
const path = require("path");
const Product = require("./model/productModel.js");
const app = express();

app.use(express.json());
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended:true}));

dbConnect();

app.get("/product/new", (req, res) => {
  res.render("addProduct");
});

app.post("/product", async(req, res)=>{
   await Product.create(req.body);
  //  res.redirect("/product");
  res.redirect("/product")
})

app.get("/product", async(req, res)=>{
  const allProduct = await Product.find({})
  // console.log(allProduct);
   res.render("home", {allProduct});
})

app.get("/product/:id", async(req, res)=>{
    const id = req.params.id;
    // console.log(id);
    const singleProduct = await Product.findById(id)
    res.render("singleProduct", {item:singleProduct})
})

const port = 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});