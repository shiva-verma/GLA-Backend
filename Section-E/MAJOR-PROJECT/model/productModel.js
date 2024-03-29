const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    imageUrl:{
        type:String,
        required:true,
        trim:true
    }
},{timestamps:true});

const Product = mongoose.model("product", productSchema);

module.exports = Product