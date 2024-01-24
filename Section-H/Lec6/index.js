const express = require('express')
const product = require('./routes/productRoutes');
const order = require('./routes/orderRoutes');
const app = express();


app.use('/product', product);

app.use('/order', order);



app.listen(5555, ()=>{
    console.log(`server is running at port 5555`)
})