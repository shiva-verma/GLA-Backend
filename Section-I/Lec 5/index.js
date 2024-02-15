const express = require('express');
const productRouter = require('./routes/productRoutes')
const orderRouter = require('./routes/orderRoutes')
const app = express();

// middleware
app.use('/product', productRouter);  //route level middleware
// app.use('/order', orderRouter);

function myMiddleware(req, res, next){
    console.log("middleware");
    next();
}

app.use(myMiddleware);
//product route


// order routes

app.listen(4444, ()=>{
    console.log(`server is running at port 4444`)
})