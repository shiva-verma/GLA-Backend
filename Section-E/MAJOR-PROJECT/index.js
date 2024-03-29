const express = require("express");
const dbConnect = require("./db/db.js");
const path = require("path")
const app = express();

app.use(express.json());
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

dbConnect();

app.get("/product/new", (req, res) => {
  res.render("addProduct");
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});