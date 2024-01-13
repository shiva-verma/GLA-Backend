const express = require('express');
const app = express();

app.get('/greet', (req, res, next)=>{
        res.send(`hello good morning`)
})

app.listen(8080, ()=>{
    console.log(`server is running at 6000`)
})