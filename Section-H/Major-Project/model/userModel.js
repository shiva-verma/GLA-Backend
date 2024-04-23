const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email:String,
    cart:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
        }
    ],
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
        }
    ],
    userType:{
        type:String,
        enum:["consumer", "retailer"]
    }
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("user", userSchema);

module.exports = User;

