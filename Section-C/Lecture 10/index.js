const express = require("express");
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/Section-C').then(()=>{
    console.log("Database is connected")
})
.catch((err)=>{
    console.log(err);
})


const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        min:19,
        max:24
    },
    fees:{
        type:mongoose.Decimal128
    }
})


const Student = new mongoose.model("Student",studentSchema);

const insertDb = async() =>{
    const data = new Student({
        name:"Sumit",
        age:23,
        fees:2000000
    })

    const result = await data.save();
    console.log(result);
}

// insertDb();

const readDb = async() =>{
    const result = await Student.find();
    console.log(result)
}

// readDb();

const updateDb = async() =>{
    const data = await Student.updateMany(
        {
        "name":"Sumit"
        },
        {
            $set:{"name":"amit"}
        }
    )
    // console.log(data);
}

updateDb();

app.listen(4545, ()=>{
    console.log(`server is running at port 4545`)
})