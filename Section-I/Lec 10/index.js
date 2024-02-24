const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Section-I").then(()=>{
    console.log(`database is connected`)
}).catch((err)=>{
    console.log(err)
})

const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        min:25,
        max:45
    },
    salary:{
        type:mongoose.Decimal128
    },
    phoneNo:{
        type:Number
    }
})

const Teacher = new mongoose.model("professor", teacherSchema);


const insertDb = async () => {
    // const data = Teacher.create(req.body);
    const data = new Teacher({
        name:"kartik",
        age:33,
        salary:1000000,
        phoneNo:987654321
    })

    const result = await data.save();
}

// insertDb();

const readDb = async() =>{
     const result = await Teacher.find();
     console.log(result);
}
// readDb();

const updateDb = async() =>{
    const updatedData = await Teacher.updateOne(
        {
            "name":"shivam"
        },
        {
            $set:{"salary":"200000000"}
        }
    )
}

// updateDb();

const deleteDb = async() =>{
    const result = await Teacher.deleteOne({
        "name":"kartik"
    })
    console.log(result);
}

// deleteDb();



app.listen(6060, ()=>{
    console.log(`server is running at port 6060`);
})