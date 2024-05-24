const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PUBLIC_PORT || 3000;
const cors = require("cors")
require("dotenv").config();
app.use(express.json());
app.use(cors())

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect(process.env.MONGO_URI, options)

const dbConnectStatus = () => mongoose.connection.readyState === 1;

app.get("/",async(req,res)=>{
  res.json({"Database_Connection_Status":dbConnectStatus()})
})

app.post("/",async(req,res)=>{
  res.json({message: "Post Request is Accepted........"})
})

app.put("/",async(req,res)=>{
  res.json({message: "Put Request is Accepted......"})
})

const UserData = require("./models/user") 
app.get("/users_data", async (req, res) => {
    const v = await UserData.find()
    res.json(v)
})

app.get("/users_data/emails", async (req, res) => {
  const emails = await UserData.distinct('email')
  const user = emails.filter(email=>email)
  res.json({email:user})
});

app.post("/signup",async(req,res)=>{
  let val = req.body
  let loginData = await UserData.create({
    username: val.username,
    email:val.email,
    password: val.password
  })
  res.json({message:"Login Done"})
})

const notesData = require("./models/notes")
app.get("/notes_data", async (req, res) => {
    const v = await notesData.find()
    res.json(v)
})

app.get("/notes_data/username",async(req,res)=>{
  const username = await notesData.distinct('username')
  const user = username.filter(username=>username)
  res.json({username:user})
})

const notesTitles = require("./models/notesTitle")
app.get("/notes_title", async (req, res) => {
  const titles = await notesTitles.find()
  res.json(titles)
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
  })
}

module.exports = app;