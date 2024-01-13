const express = require('express');

const app = express();

const PORT = 4001

app.get('/', (req, res)=>{
    console.log(__dirname);
    res.send("hello first server created")
})


app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})