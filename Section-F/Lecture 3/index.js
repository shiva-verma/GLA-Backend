const express = require('express');
const path = require('path')
const app = express();

// app.use(express.urlencoded({extended:true}))

// app.get('/information', (req, res, next)=>{
//     console.log(req.query);
//     res.send(`username = ${req.query.username} && password = ${req.query.password}`)
// })

// app.post('/information',(req, res, next)=>{
//     console.log(req.body);
//     res.send(`username = ${req.body.username} & password = ${req.body.password}`)
// })

app.get('/about', (req, res, next)=>{
    console.log(`first callback`)
    next();
}, (req, res, next)=>{
    console.log("second callback")
    res.send("program run successfully")
})

app.use(express.static(path.join(__dirname, "static")));
app.listen(1010, ()=>{
    console.log(`server is running at port 1010`)
})