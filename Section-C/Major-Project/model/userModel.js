const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Product = require("./productModel");
const userSchema = new mongoose.Schema({
    // username:String,
    // password:String,
    email:String,
    cart:[
        {
            _id:{_id:false},
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"product"
            },
            quantity:{
                type:Number
            }
        }
    ],
    userType:{
        type:String,
        enum:["buyer","seller"]
    }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("user", userSchema);

module.exports = User;

