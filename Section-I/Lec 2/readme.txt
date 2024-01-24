//npm init -y

//npm i express nodemon path


//write this code into index.js file
const express = require('express');

const app = express();

app.listen(2020, ()=>{
    console.log(`server is running at port 2020`)
})