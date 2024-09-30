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
const notesData = require("./models/notes")
const notesTitles = require("./models/notesTitle")

//all get Api Requests
app.get("/users_data", async (req, res) => {
    const v = await UserData.find()
    res.json(v)
})

app.get("/users_data/emails", async (req, res) => {
  const emails = await UserData.distinct('email')
  const user = emails.filter(email=>email)
  res.json({email:user})
});

app.get("/notes_data", async (req, res) => {
  const v = await notesData.find()
  res.json(v)
})

app.get("/notes_data/username",async(req,res)=>{
const username = await notesData.distinct('username')
const user = username.filter(username=>username)
res.json({username:user})
})

app.get("/notes_title", async (req, res) => {
const titles = await notesTitles.find()
res.json(titles)
})


//all Post Api requests
app.post("/signup",async(req,res)=>{
  let val = req.body
  let loginData = await UserData.create({
    username: val.username,
    email:val.email,
    password: val.password
  })
  res.json({message:"Login Done"})
})

app.post("/login",async(req,res)=>{
  let val = req.body
  let vb = await UserData.findOne({email:val.email}).then(user=>{if(user){
    if(user.password===val.password){
      res.json({access:"AccessGranted",username:user.username})
    } else{
      res.json({access:"AccessDenied"})
    }
  }})
})

app.post("/add_title", async (req, res) => { 
  let titleVal = req.body
  let titles = await notesTitles.create({
    username:titleVal.username,
    email:titleVal.email,
    title_name:titleVal.title_name,
    date:titleVal.date
  })
  res.send("done")  
})

app.post("/title/:id",(req,res)=>{
  const id = req.params.id;
  notesTitles.findById(id).then((data)=>{
    res.json({
      titleName: data.title_name,
      email: data.email,
      uname: data.username
    })
  })
})


if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
  })
}

module.exports = app;
