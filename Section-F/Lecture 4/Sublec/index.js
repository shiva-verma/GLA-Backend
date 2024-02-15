const express = require('express');
const product = require('./routes/productRoutes');
const middleware = require('./middleware/helper');
const app = express();


app.use('/product', product); // router layer middleware


app.use(middleware); //application layer middleware

app.listen(1616, ()=>{
    console.log(`server is running at port 1616`)
})