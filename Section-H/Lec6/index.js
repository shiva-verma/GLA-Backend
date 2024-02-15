const express = require('express')
const product = require('./routes/productRoutes');
const order = require('./routes/orderRoutes');
const app = express();


app.use('/product', product); //route level middleware

app.use('/order', order);

// app.set('view engine', 'ejs');
// app.set('views', './views')

function myMiddleware(req, res, next){
    console.log("hello middleware");
    next();
}

app.use(myMiddleware);  //application level middleware

app.get('/home', (req, res)=>{
    res.render('home.ejs')
})

app.listen(5555, ()=>{
    console.log(`server is running at port 5555`)
}) 