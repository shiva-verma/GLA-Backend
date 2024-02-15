const fs = require('fs');

const data = "This is our first node js lecture"

// fs.writeFile("hello.txt", data, (err)=>{
//     if(err){
//         console.log("This file is not wirteable")
//     }else{
//         console.log("file is successfully written")
//     }
// });

fs.readFile('hello.txt', {encoding:"utf-8"},(err, data)=>{
    console.log(data);
})