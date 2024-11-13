const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const userSchema = new Schema({
    name : String,
    email : String,
    password : String,
    dob : String,
    registered_at : Date,
    mobile : String,
    gender : String
})

const userModel = mongoose.model("Users", userSchema, "users");
module.exports = {userModel};