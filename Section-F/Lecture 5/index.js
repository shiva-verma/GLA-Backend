const express = require('express');
const showProduct = require('./middleware/helper');
const app = express();

app.use("/order", showProduct)
//view template setup
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/home', (req, res)=>{
    res.render('index.ejs', {name:"abcde"});
})

app.listen(3333,()=>{
    console.log("server is running at port 3333")
})