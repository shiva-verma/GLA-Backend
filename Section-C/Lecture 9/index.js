const express = require('express');
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, "static")))

const data = ['handball', 'cricket', 'football']

app.get('/task', (req, res)=>{
    res.json(data);
})

app.listen(4040, ()=>{
    console.log(`server is running at port 4040`)
})