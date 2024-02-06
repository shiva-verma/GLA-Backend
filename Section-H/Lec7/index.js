const express = require('express');
const userData = require('./data/data.js')
const app = express();
const methodOverride = require('method-override');

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/users', (req, res)=>{
    // console.log(userData); 
    res.render("users", {userData})
})

app.get('/user/new',(req, res)=>{
    res.render("newUser")
})

app.post('/users', (req, res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const city = req.body.city;
    // console.log(`name = ${name} && age = ${age} && city = ${city}`)
    const newUser = {
        id:userData.length + 1,
        name,age,city
    }
    userData.push(newUser);
    res.redirect('/users')
})

app.get('/user/:id', (req, res)=>{

    const id = req.params.id;

    const user = userData.find((u) => u.id == id)

    console.log(user);

    res.render("singleUser", {user})
})

app.get('/user/:id/new', (req, res)=>{
    const id = req.params.id;

    const user = userData.find((u) => u.id == id)

    res.render("EditUser", {user})

})

app.patch('/user/:id', (req, res)=>{
    const id = req.params.id;

    const user = userData.find((u)=> u.id == id);

    const {name, age, city} = req.body;

    user.name = name;
    user.age= age;
    user.city = city;

    res.redirect('/users')
})

app.delete('/user/:id', (req, res)=>{
    const id = req.params.id;

    const user = userData.find((u)=> u.id == id);

    // const index = userData.indexOf(user);

    // userData.splice(index, 1);

    const filterUser = userData.filter((u)=> u.id != id);
    userData = filterUser;

    res.redirect('/users');
})

app.listen(1212, ()=>{
    console.log(`server is running at port 1212`)
})