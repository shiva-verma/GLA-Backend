const express = require('express');
const path = require('path')
const app = express();



// app.get('/information', (req, res, next)=>{
//      console.log("hello first callback")
//     //  res.send("first callback")
//     next();
// }, (req, res, next)=>{
//     console.log("second callback")
//     res.send("program run successfully")
// })

function cb1(req, res, next){

    next();
}
function cb2(req, res, next){

    next();
}
function cb3(req, res, next){

    res.send()
}

app.get('/about', [cb1, cb2, cb3])

app.listen(6060, ()=>{
    console.log(`server is running at port 6060`)
})