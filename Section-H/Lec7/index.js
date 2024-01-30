const express = require('express');
const userData = require('./data/data.js')
const app = express();
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/users', (req, res)=>{
    // console.log(userData); 
    res.render("users", {userData})
})

app.get('/user/new',(req, res)=>{
    res.render("newUser")
})

app.post('/newUser', (req, res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const city = req.body.city;

    const newUser = {
        name,age, city
    }
    userData.push(newUser);
})

app.listen(1212, ()=>{
    console.log(`server is running at port 1212`)
})