const fs = require('fs');
const path = require('path')

// const loc = path.join(__dirname, "hello.txt")

const data = "This is first lecture on filesystem"

// fs.writeFile("hello.txt", data, (err)=>{
//     if(err){
//         console.log("this file is not writeable")
//     }else{
//         console.log(`file is successfully written`)
//     }
// });

fs.readFile("hello.txt", 'utf-8', (err, data)=>{
    console.log(data);
})