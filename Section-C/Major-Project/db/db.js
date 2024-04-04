const mongoose = require("mongoose");

async function dbConnect(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/E-Commerce-c")
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect;
