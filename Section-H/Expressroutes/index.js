const express = require('express')
const app = express();
const PORT = 5000;


app.get('/server1', (req, res)=>{
      res.send("hello our first server is created")
})

app.get('/login', (req, res)=>{
    res.send(`hello good morning`)
})

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})