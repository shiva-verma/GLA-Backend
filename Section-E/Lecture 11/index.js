const express = require("express");
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/collegedata').then(()=>{
    console.log("database is connected")
})
.catch((err)=>{
    console.log(err)
})

const studentSchema = new mongoose.Schema({
      name:{
        type:String,
        required:true,
        trim:true
      },
      age:{
        type:Number,
        min:18, 
        max:28
      },
      fees:{
        type:mongoose.Decimal128
      }
})

const Student = new mongoose.model("student", studentSchema);

const insertDb = async () =>{
     const data = new Student({
        name:"abcde",
        age:24,
        fees:6546467,
        collegeId:2110000675
     },{
        name:"ab",
        age:24,
        fees:65,
        collegeId:211675 
     })

    const result = await data.save();

}

// insertDb();

const readDb = async () => {
     const data = await Student.find()
     console.log(data);
}

// readDb();


const updateDb = async () => {
    const data = await Student.updateOne(
        { name:"abcde" },
        {
        $set: { age:22 }
        }
    )
    console.log(data);
}

updateDb();

const deleteDb = async () => {
    const data = await Student.deleteOne({name:"abcde"})
    console.log(data);
}

app.listen(2020, ()=>{
    console.log(`server is running at port 2020`)
})