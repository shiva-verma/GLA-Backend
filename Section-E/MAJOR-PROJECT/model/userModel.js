const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email:String,
    userType:{
            type:String,
            enum:["buyer", "seller"]
    },
    cart:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'product'
        }
    ]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("user", userSchema);

module.exports = User