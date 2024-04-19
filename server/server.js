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

app.get('/', (req, res) => {
  res.json({ "dbConnectStatus": dbConnectStatus() });
});

app.post('/', async (req, res) => {
  res.json({ message: "Post Request Accepted.." });
});

app.put('/', async (req, res) => {
  res.json({ message: "Put Request Accepted.." });
});

const UserData = require("./models/user"); 
app.get("/users_data", async (req, res) => {
    const v = await UserData.find();
    res.json(v)
})

const notesData = require("./models/notes"); 
app.get("/notes_data", async (req, res) => {
    const v = await notesData.find();
    res.json(v)
})


app.get("/notes_data/username",async(req,res)=>{
  const username = await notesData.distinct('username')
  const user = username.filter(username=>username)
  res.json({username:user})
=======
app.put('/',async(req,res)=>{
  res.json({message:"Put Request Accepted.."})
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
}

module.exports = app;