const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname +"static")))

app.get('/', (req, res, next) => {
        // res.send("first server is created");
        res.sendFile(path.join(__dirname +"/index.html"));
        // console.log(__dirname);
})

app.get('/greet', (req, res, next)=>{
    res.send("hello good morning");
    // res.send("hello");
})

// app.get('/app.js', (req, res)=> {
//     console.log("hello I am app.js")
// })

app.listen(8080, ()=>{
    console.log(`server is running at port 8080`)
})