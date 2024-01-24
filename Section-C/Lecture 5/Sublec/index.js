const express = require('express');
const app = express();
const pro = require('./routes/productRoutes');


app.use('/product', pro);



app.listen(6565, ()=>{
    console.log(`server is running at port 6565`)
})

