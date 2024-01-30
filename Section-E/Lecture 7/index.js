const express = require('express');
const productRouter = require('./routes/productRoutes')
const app = express();

//product
app.use('/prod', productRouter); //route level
app.use(myMiddleware); //application level

app.get('/home', (req, res)=>{
    res.send("home");
})

function myMiddleware(req, res, next){
    console.log("middleware")
    next();
}




app.listen(2222, ()=>{
    console.log(`server is running at port 2222`)
})