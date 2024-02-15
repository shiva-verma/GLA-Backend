const express = require('express');
const path = require('path')
const app = express();
const methodOverride = require('method-override')

app.use(express.static(path.join(__dirname, "client")))
app.use(methodOverride('_method'))
// app.use(express.urlencoded({extended:true}));
app.use(express.json());

const games = ["cricket", "football", "vollyball"]
app.get('/task',(req, res)=>{
    // res.render("task.ejs", games) //server side rendering
    res.json(games);
})

app.patch('/task',(req, res)=>{
    const gg = req.body.value;
    games.push(gg);
    res.send({
        "success":true
    })  
})

app.listen(5050, ()=>{
    console.log(`server is running at port 5050`)
})