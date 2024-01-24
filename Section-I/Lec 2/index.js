const express = require('express');
const path = require('path')
const app = express();

// app.use(express.static(path.join(__dirname , "static")))
app.get('/', (req, res)=>{
    res.send(`hello everyone`)
})

app.get('/search', (req, res)=>{
    console.log(req);
    console.log(req.query);
    res.send(`product = ${req.query.product}  && color = ${req.query.color}`)
})

app.get('/student/:section([A-Z])/:rollno([0-9]{2})', (req, res)=>{
    console.log(req);
    res.send(`section = ${req.params.section} && roll no = ${req.params.rollno}`)
})

app.listen(2020, ()=>{
    console.log(`server is running at port 2020`)
})