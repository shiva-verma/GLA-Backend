const express = require('express');
let userData = require('./data/data.js')
const app = express();
const fs = require('fs');
const methodOverride = require('method-override')

const location = path.join(__dirname, "data", "data.js")

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(methodOverride('_method'))
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
        id: userData.length + 1,
        name, city, age
    }
    userData.push(newUser);
    fs.writeFile(location, userData, (err)=>{

    })

    res.redirect('/users')
})

app.get('/user/:id', (req, res)=>{
    const id = req.params.id

    const user = userData.find((u)=> u.id == id)

    res.render("singleUser", {user});
})

app.get('/user/edit/:id',(req, res)=>{
    const id = req.params.id

    const user = userData.find((u)=> u.id == id)
    res.render("editUser", {user});
})

app.patch('/user/:id', (req, res)=>{
    const id = req.params.id

    const user = userData.find((u)=> u.id == id)
    const {name, age, city} = req.body;

    user.name = name;
    user.age = age;
    user.city = city;

    res.redirect('/users')
})

app.delete('/user/:id',(req, res)=>{
    const id = req.params.id;

    const user = userData.find((u)=> u.id == id);

    // const index = userData.indexOf(user);

    // userData.splice(index, 1);

    const filterUser = userData.filter((u)=>  u.id != id)

    userData = filterUser;

    res.redirect('/users');
})


app.listen(3636,()=>{
    console.log(`server is running at port 3636`)
})

