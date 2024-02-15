const express = require('express');
const app = express();
const path = require('path')
// const bodyparser = require('body-parser')
app.use(express.static(path.join(__dirname, "static")))
const methodOverride = require('method-override');

// app.use(bodyparser.json())
app.use(methodOverride('_method'));
app.use(express.json());

const data = ['handball', 'cricket', 'football']

app.get('/task', (req, res)=>{
    res.json(data);
})

app.patch('/task', (req, res)=>{
    const {value} = req.body;
    data.push(value);
    console.log(data);
    res.send({
        'success':true
    })
})

app.listen(4040, ()=>{
    console.log(`server is running at port 4040`)
})