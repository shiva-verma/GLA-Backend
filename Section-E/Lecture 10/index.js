const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');

// const path = require('path')
app.use(express.static(path.join(__dirname, "client"), {}))
app.use(methodOverride('_method'))
app.use(express.json());

const games = ['swimming', "cricket", "basketball", "football"];

app.get('/task', (req, res)=>{
    // res.render("home.ejs", games);
    res.json(games)
})

app.patch('/task', (req, res)=>{
    const data = req.body.value;

    games.push(data);

    res.send({
        "success":true
    })
})

app.listen(4444, ()=>{
    console.log(`server is running at port at 4444`)
})