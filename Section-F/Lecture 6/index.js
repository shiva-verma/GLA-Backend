const express = require('express');
const userData = require('./data/data.js')
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(express.urlencoded({extended:true}));

app.get('/users', (req, res)=>{
    res.render("users.ejs", {userData})
})

app.get('/user/new', (req, res)=>{
    res.render('newUserForm.ejs');
})

app.post('/users', (req, res)=>{

    const {name, age, city} = req.body;

    const newUser = {
        name, city, age
    }
    userData.push(newUser);
    res.redirect('/users')
})

app.listen(3636,()=>{
    console.log(`server is running at port 3636`)
})

