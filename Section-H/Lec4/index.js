const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, "static")))
app.use(express.urlencoded({extended:true}))

app.get('/information', (req, res)=>{
    console.log(req)
    res.send(`username = ${req.query.username} && password = ${req.query.password}`)
})

app.post('/information', (req, res)=>{
    console.log(req.body)
    res.send("data sent successfully")
})

app.listen(4444, ()=>{
    console.log(`server is running at port 4444`)
})