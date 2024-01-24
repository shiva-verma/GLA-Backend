const express = require('express');
// import express from 'express'
const path = require('path')
// import path from 'path'
const app = express();

app.use(express.urlencoded({extended:true}))

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
})

// app.get('/information', (req, res)=>{
//     console.log(req)
//     res.send(`name = ${req.query.username}`)
// })

app.post('/information', (req, res)=>{
        console.log(req.body);
        res.send(req.body.file);
})

app.listen(4545, ()=>{
    console.log(`server is running at port 4545`)
})