const express = require("express");
const dbConnect = require("./db/db.js");
const path = require("path");
const Product = require("./model/productModel.js");
const methodOverride = require('method-override');
const app = express();

app.use(express.json());
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

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

app.get('/product/:id/edit', async(req, res)=>{
  const {id} = req. params
    const singleProduct = await Product.findById(id)
    res.render('edit', {i:singleProduct})
})

app.patch('/product/:id',async(req, res)=>{
    //find product with given id in params
    const {id} = req.params;
    const product = await Product.findById(id);

    //get all new values from form
    const {productName, price, description, imageUrl} = req.body;

    // updated old values with new values
    await Product.findByIdAndUpdate(id, {productName, price, description, imageUrl});

    //redirect
    res.redirect(`/product/${id}`);
})

app.delete('/product/:id', async(req, res)=>{
  const {id} = req.params;

  await Product.findByIdAndDelete(id);
  res.redirect('/product');
})

const port = 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});