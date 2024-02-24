const express = require("express")
const app = express();
const mongoose = require("mongoose")


mongoose.connect("mongodb://127.0.0.1:27017/Section-F").then(()=>{
    console.log(`database is connected`)
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
        min:17,
        max:24
    },
    collegeId:{
        type:Number
    }
})

const Student = new mongoose.model("data", studentSchema);

const insertDb = async() =>{
     const newUser = new Student({
        name:"mohit",
        age:18,
        colegeId:20115675
     })
     const result = await newUser.save();
}

// insertDb()


const readDb = async() =>{
        const result = await Student.find({"name":"mohit"});
        console.log(result);
}
readDb();

const updateDb = async() =>{
        const updatedUser = await Student.updateOne(
            {
                "name":"mohit"
            },
            {
                $set:{"name":"sarthak"}
            }
        )
}

// updateDb();

const deleteDb = async() =>{
    const result = await Student.deleteOne({"name":"sarthak"});
    console.log(result);
}

deleteDb();



app.listen(2525, ()=>{
    console.log(`server is running at port 2525`)
})