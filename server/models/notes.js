const mongoose = require("mongoose")

const notesSchema = new mongoose.Schema({
    username : String,
    topic : String,
    sub_topic : String,
    text_notes : String,
    youtube_link : String,
    image_link : String,
    summary : String,
    voice_link : String,
    term : String,
    definition : String
})

const note = mongoose.model("notes",notesSchema)
module.exports = note;