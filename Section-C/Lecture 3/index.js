const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send("Hello everyone")
})

app.get('/product', (req, res)=>{
    console.log(req.query);
    res.send(`type = ${req.query.type} & color = ${req.query.color}`)
})

app.get('/student/:rollno([0-9]{2})/:class([a-z])', (req, res)=>{
    console.log(req.params);
    res.send(`rollno = ${req.params.rollno} & class = ${req.params.class}`)
})

app.listen(4040, ()=>{
    console.log(`server is running at port 4040`)
})
