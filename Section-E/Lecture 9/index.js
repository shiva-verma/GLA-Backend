const fs = require('fs');

// const location = path.join(__dirname, "data", "hello.txt")

const data = "this is our first node js lecture"

// fs.writeFile("hello.txt", data, (err,data)=>{
//     if(err){
//         console.log('file is not writeable')
//     }else{
//         console.log(`file is successfully written`)
//     }
// })

fs.readFile('hello.txt',{encoding: 'utf-8'}, (err, data)=>{
    console.log(data);
})