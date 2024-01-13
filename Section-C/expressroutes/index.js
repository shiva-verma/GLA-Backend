const express = require('express');
const path = require("path")
const app = express();

app.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname +"/index.html"))
    // res.send("hello")
    // console.log(__dirname);
})

app.get('/greet', (req, res)=>{
    res.send("hello good afternoon")
})

app.get('/app.js', (req, res)=>{
    console.log("app.js")
})

app.listen(5050, ()=>{
    console.log("server is running at port 5050")
})