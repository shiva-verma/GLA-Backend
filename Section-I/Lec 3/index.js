const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname , "static")))

app.use(express.urlencoded({extended:true}));

app.get('/information', (req, res)=>{
    res.send(`username = ${req.query.username} && password = ${req.query.password}`)
})
 
app.post('/information', (req, res)=>{
    console.log(req.body);
    res.send(`username = ${req.body.username} && password = ${req.body.password}`) 
})

app.get('/about', (req, res, next)=>{
    console.log(`first callback`)
    next();
}, (req, res, next)=>{
    console.log(`second callback`)
    res.send(`program run successfully`)
})

app.get('/',[cb1, cb2, cb3])

app.listen(7070, ()=>{
    console.log(`server is running at port 7070`)
})