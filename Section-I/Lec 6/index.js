const express = require('express');
const userData = require('./data/data.js')
const app = express();
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', "./views")
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.get('/users',(req, res)=>{
    res.render("user",{userData})
})

app.get('/user/new', (req, res)=>{
    res.render('newUser')
})

app.post('/users', (req, res)=>{
    // const name = req.body.name;
    // const age = req.body.age;
    // const city = req.body.city;

    const {name, age, city} = req. body;
    // console.log(`${name} && ${age} && ${city}`);
    const newUser = {
        id: userData.length + 1,
        name, age, city
    }

    userData.push(newUser);
    res.redirect('/users');   
})

app.get('/user/:id', (req, res)=>{
    const id = req.params.id;
    
    const user = userData.find((u) => u.id == id); //finding user with id 

    res.render("singleUser", {user})

})

app.get('/user/:id/new', (req, res)=>{
    const id = req.params.id;
    
    const user = userData.find((u) => u.id == id);

    res.render("edit.ejs", {user})
})

app.put('/user/:id', (req, res)=>{
    const id = req.params.id;
    const {name, age, city} = req.body;

    const user = userData.find((u)=> u.id == id);

    user.name = name;
    user.age = age;
    user.city = city;

   res.redirect('/users')
})

app.listen(3434, ()=>{
    console.log(`server is running at port 3434`)
})