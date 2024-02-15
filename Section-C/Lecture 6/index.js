const express = require('express');
const app = express();

const productRouter = require('./routes/productRoutes');

// app.set('view engine', 'ejs');
app.set('views', './views');

//application layer middleware
app.use(function middleware(){
        console.log("first")
})

app.use('/prod', productRouter); //router layer middleware



app.listen(4343, ()=>{
    console.log(`server is rinning at port 4343`)
})