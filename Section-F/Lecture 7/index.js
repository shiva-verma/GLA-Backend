const fs = require('fs');


const data = "This is our first lecture on node js"

// fs.writeFile("hello.txt", data, (err, data)=>{
//     if(err){
//         console.log('file is not writeable')
//     }else{
//         console.log("file is successfully written")
//     }
// })

fs.readFile("hello.txt",{ encoding: 'utf-8'}, (err, data)=>{
    console.log(data);
})