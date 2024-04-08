const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        require:true,
        trim:true
    },
    price:{
        type:Number,
        require:true,
        trim:true
    },
    description:{
        type:String,
        require:true,
        trim:true
    },
    imageUrl:{
        type:String,
        require:true,
        trim:true
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"review"
        }
    ]
},{timestamps:true});

const Product = mongoose.model("product", productSchema);

module.exports = Product;

