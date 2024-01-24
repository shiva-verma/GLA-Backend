const express = require('express');
const product = require('./routes/productRoutes');
const app = express();

app.use('/product', product);

app.listen(1616, ()=>{
    console.log(`server is running at port 1616`)
})