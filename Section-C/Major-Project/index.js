const express = require("express");
const dbConnect = require("./db/db.js");
const path = require("path");
const Product = require("./model/productModel.js");
const app = express();
const methodOverride = require("method-override");
const port = 4000;

dbConnect();
app.set("view engine", "ejs");
app.set("views", "views")
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.get("/product/new", (req, res) => {
  res.render("addProduct");
});

app.post("/product", async(req, res)=>{
  //  const productName = req.body.productName
  //  const price = req.body.price
  //  const description = req.body.description
  //  const imageUrl = req.body.imageUrl

  //  const newProduct = new Product({
  //      productName,
  //      price,
  //      description,
  //      imageUrl
  //  })

  // await newProduct.save();

  await Product.create(req.body)
  res.send("hiii")

})

app.get("/product", async(req, res)=>{
  const allProduct = await Product.find({});
  console.log(allProduct);
  res.render("home", {allProduct});
})

app.get('/product/:id', async(req, res)=>{
  const {id} = req.params
  const singleProduct = await Product.findById(id);
  res.render("singleProduct", {product:singleProduct});
})

app.get('/product/:id/edit', async(req, res)=>{
  // find product with given id in the params
  const {id} = req.params
  const product = await Product.findById(id);

  res.render('edit', {i:product});
})

app.patch('/product/:id', async(req, res)=>{
  const {id} = req.params;
  await Product.findByIdAndUpdate(id, );
  res.redirect(`/product/${id}`);
})

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);   
});