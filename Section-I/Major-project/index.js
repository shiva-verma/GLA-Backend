const express = require("express");
const dbConnect = require("./db/db.js");
const Product = require("./model/productModel.js");
const path = require("path")
const app = express();
const port = 5000;
// app.use(express.json());
const methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views")
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
dbConnect();


app.get("/product/new", (req, res) => {
  res.render("addProduct");
});

app.post("/product", async(req, res)=>{
    // const {productName, price, description, imageUrl} = req.body;

    // const product = new Product({
    //   productName,
    //   price,
    //   description,
    //   imageUrl
    // })

    // await product.save();

    await Product.create(req.body);
    res.redirect('/product');

})

app.get("/product", async(req, res)=>{
  const allProduct = await Product.find({})
  // console.log(allProduct);
  res.render("home", {allProduct});
})

app.get('/product/:id', async(req, res)=>{
  const {id} = req.params;
  const product = await Product.findById(id);
  res.render('singleProduct', {item:product});
})

app.get('/product/:id/edit', async(req, res)=>{
  const {id} = req.params;
  const product = await Product.findById(id);
     res.render("edit", {i:product});
})

app.patch('/product/:id', async(req, res)=>{
     //find product using given id in params
     const {id} = req.params;
     const product = await Product.findById(id);

    //  get all new values from form
    const {productName, price, description, imageUrl} = req.body;

    await Product.findByIdAndUpdate(id, {productName, price, description, imageUrl});

    res.redirect(`/product/${id}`);

})

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});