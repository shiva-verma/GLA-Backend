const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, "static")))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "static.html"));
})

app.get('/greet', (req, res)=>{
    res.send("hello good afternoon")
})

// app.get('/app.js', (req, res)=> {
//     res.send("hello")
// })

app.listen(2000, ()=>{
    console.log(`server is running at port 2000`)
})