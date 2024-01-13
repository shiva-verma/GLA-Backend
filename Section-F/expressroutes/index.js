const express = require('express')
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname , "static")))

app.get('/', (req, res, next)=>{
        res.sendFile(path.join(__dirname ,"static","index.html"))
        // res.send("hello");
        // console.log(__dirname)
})

app.get('/clothes', (req, res, next)=> {
    res.send(req.query.color)
})

app.get('/product/:name', (req, res)=>{
    res.send(req.params.name);
})

// app.get('/app.js', (req, res, next)=>{
//     res.send('console.log("Hello")')
// })

app.listen(6060, ()=>{
    console.log(`server is running at port 6060`)
})