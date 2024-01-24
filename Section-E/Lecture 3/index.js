const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send("hello everyone")
})
app.get('/search', (req, res)=>{
    console.log(req.query)
    res.send(`product = ${req.query.product} & color = ${req.query.color} & price = ${req.query.price}`)
})

app.get('/student/:section/:rollno([0-9]{2})', (req, res)=>{
    console.log(req.params);
    res.send(`section = ${req.params.section} & rolllno = ${req.params.rollno}`)
})
app.listen(3030, (req, res)=>{
    console.log(`server is running at port 3030`);
})