const express = require("express")
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Section-H").then(()=>{
    console.log(`Database is connected`)
})
.catch((err)=>{
    console.log(err)
})


const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        min:17,
        max:25,

    },
    collegeId:{
        type:Number
    },
    fees:{
        type: mongoose.Decimal128
    }
})

const Student = new mongoose.model("student", studentSchema);

//insert
const insertData = async() =>{
    const data = new Student({
        name:"amit",
        age:22,
        collegeId:2110987,
        fees:12000000
    })

    await data.save();
}

// insertData()


//read
const readData = async() =>{
     const result = await Student.find({"age":22});

     console.log(result);
}
// readData()

//delete
const deleteData = async() =>{
    const result = await Student.deleteOne({"name":"rudra"})
    console.log(result);
}

deleteData();

//update
const updateData = async()=>{
    const updatedData = await Student.updateOne({"name":"sumit"},{$set:{}});
}



app.listen(3232, ()=>{
    console.log(`server is running at port 3232`)
})