const fs = require('fs');
const path = require('path');

const data = "This is the lecture for file sysytem";
fs.writeFile("hello.txt", data, (err, data)=>{
   if(err){
      console.log("file is not writeable")
   }else{
    console.log("file is successfully written")
   }
})
 
fs.readFile("hello.txt",{encoding:'utf-8'},(err)=>{
        console.log(data.toString());
})