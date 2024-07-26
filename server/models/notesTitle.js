const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
    username : String,
    email : String,
    title_name : String, 
    date : String
});

const titles = mongoose.model("titles", userDataSchema);
module.exports = titles;