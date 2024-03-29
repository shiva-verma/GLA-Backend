const express = require("express");
const dbConnect = require("./db/db.js");
const path = require("path");
const Product = require("./model/productModel.js");
const app = express();
const port = 4000;

dbConnect();
app.set("view engine", "ejs");
app.set("views", "views")
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));

app.get("/product/new", (req, res) => {
  res.render("addProduct");
});

app.post("/product", async(req, res)=>{
    // const productName = req.body.productName;
    // const price = req.body.price;
    // const description = req.body.description;
    // const imageUrl = req.body.imageUrl;

    // const newProduct = new Product({
    //   productName,
    //   price,
    //   description,
    //   imageUrl
    // })

    // await newProduct.save();

    await Product.create(req.body);

    // res.send("hiii");
    res.redirect("/product");
})

app.get("/product", async(req, res)=>{
  const allProduct = await Product.find({});
  // console.log(allProduct);
  res.render("home", {allProduct});
})

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
    
});