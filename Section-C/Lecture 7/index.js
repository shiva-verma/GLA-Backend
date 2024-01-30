const express = require('express');
const userData = require('./data/data.js')
const app = express();

app.set('view engine', 'ejs');
app.set('views','./views')
app.use(express.urlencoded({extended:true}))
app.get('/user', (req, res)=>{
    res.render("user.ejs", {userData})
})

app.get('/user/new', (req, res)=>{
    res.render("newForm");
})

app.post('/newUser', (req, res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const city = req.body.city;

    const newObj = {
        id: userData.length + 1,
        name,age,city
    }
    userData.push(newObj);
})

app.listen(1313, ()=>{
    console.log(`server is running port 1313`)
})