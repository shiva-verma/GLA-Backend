const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, "client")))
app.use(methodOverride("_method"))
app.use(express.json());

const games = ["Swimming", "pubg", "football", "kho-kho"]

app.get('/todos', (req, res)=>{
    // res.render("home.ejs", games)

    res.json(games);
})

app.patch('/todos', (req, res)=>{
    const data = req.body.value;
    games.push(data);
    res.send({
        "success":true
    })
})

app.listen(3333, ()=>{
    console.log(`server is running at port 3333`)
})