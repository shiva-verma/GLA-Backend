const express = require('express');
let userData = require('./data/data.js')
const methodOverride = require('method-override');
const app = express();

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.set('views', './views')
app.set("view engine", 'ejs')

app.get('/users', (req, res)=>{
    res.render("user.ejs", {userData})
})

app.get('/user/new', (req, res)=>{
    res.render("newUser", {title:"abcde"})
})

app.post('/users', (req, res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const city = req.body.city;

    // const {name, age, city} = req.body

    const newObj = {
        id:userData.length + 1,
        name, age, city
    }

    userData.push(newObj);
    // await student.create(newObj)
    res.redirect('/users')//redirecting home
})

app.get('/user/:id', (req, res)=>{
    const id = req.params.id;

    const user = userData.find((u) => u.id == id);

    res.render("singleUser", {user})
})

app.get('/user/edit/:id', (req, res)=>{
    const id = req.params.id;

    const user = userData.find((u) => u.id == id);
    res.render("editUser", {user})
})

app.patch('/user/:userId', (req, res)=>{
    const userId = req.params.userId;

    const userDetail = userData.find((u)=> u.id == userId);

    const {name, age , city} = req.body;

    userDetail.name = name;
    userDetail.age = age;
    userDetail.city = city;

    res.redirect('/users');
})

app.delete('/user/:id', (req, res)=>{
    const id = req.params.id;

    const userDetail = userData.find((u)=> u.id == id);

    // let index = userData.indexOf(userDetail);

    // userData.splice(index, 1)

    const filtereduser = userData.filter((u) => u.id != id);

    userData = filtereduser

    res.redirect('/users');

})

app.listen(6565, ()=>{
    console.log(`server is running at port 6565`)
})