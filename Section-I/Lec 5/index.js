const express = require('express');
const productRouter = require('./routes/productRoutes')
const orderRouter = require('./routes/orderRoutes')
const app = express();

// middleware
app.use('/product', productRouter);
// app.use('/order', orderRouter);

//product route


// order routes

app.listen(4444, ()=>{
    console.log(`server is running at port 4444`)
})