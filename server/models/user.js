const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String 
});

const login = mongoose.model("userdatas", userDataSchema);
module.exports = login;