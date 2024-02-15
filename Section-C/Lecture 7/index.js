const express = require('express');
const userData = require('./data/data.js')
const methodOverride = require('method-override');
const app = express();

const loc = path.join(__dirname,"data","data.js")

app.set('view engine', 'ejs');
app.set('views','./views')
app.use(express.urlencoded({extended:true}))

app.use(methodOverride('_method'));

app.get('/users', (req, res)=>{
    res.render("user.ejs", {userData})
})

app.get('/user/new', (req, res)=>{
    res.render("newForm");
})

app.post('/users', (req, res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const city = req.body.city;

    const newObj = {
        id: userData.length + 1,
        name,age,city
    }
    userData.push(newObj);
    res.redirect('/users');
})

app.get('/user/:id', (req, res)=>{
    const id = req.params.id;
    const user = userData.find((u)=> u.id == id);
    res.render("singleUser", {user})

})

app.get("/user/:id/new", (req, res)=>{
    const id = req.params.id;
    const user = userData.find((u)=> u.id == id);
    res.render("edit.ejs", {user})
})

app.patch('/user/:id', (req, res)=>{
    const id = req.params.id;
    const user = userData.find((u)=> u.id == id);

    const {name, age, city} = req.body;

    user.name = name;
    user.age = age;
    user.city = city;
    res.redirect('/users')
})

app.delete('/user/:id', (req, res)=>{
    const id = req.params.id;
    const user = userData.find((u)=> u.id == id);

    //  const index = userData.indexOf(user);
    //  userData.splice(index, 1);

    const newUserArr = userData.filter((u) => u.id != id)
    userData = newUserArr;
     res.redirect('/users');
})

app.listen(1313, ()=>{
    console.log(`server is running port 1313`)
})