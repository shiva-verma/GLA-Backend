const express = require('express')
// const path = require('path')
// import express from 'express'
const app = express();

// app.use(express.static(path.join(__dirname , "static")))

app.get('/search', (req, res)=>{
    console.log(req);
    res.send(`product = ${req.query.product} && color = ${req.query.color}`)
})

app.get('/student/:section([A-Z])/:rollno([0-9]{2})', (req, res)=>{
    console.log(req);
    res.send(`section = ${req.params.section} rollno = ${req.params.rollno}`)
})
// app.get('/', (req, res)=>{
//     console.log(__dirname)
//     res.sendFile(path.join(__dirname + "/index.html"))
// })

// app.get('/app.js', (req, res)=>{
//     res.send("hello")
// })

// app.get('/script.js', (req, res)=>{

// })

app.listen(2525,()=>{
    console.log(`server is running at port 2525`);
})