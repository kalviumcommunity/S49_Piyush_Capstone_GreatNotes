const express = require('express')
const app = express()
const port = process.env.PUBLIC_PORT || 3000

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({message:"HI"})
})

app.post('/',async(req,res)=>{
  res.json({message:"Post Request Accepted.."})
})

app.put('/',async(req,res)=>{
  res.json({message:"Put Request Accepted.."})
})

if (require.main === module) {
    app.listen(port,() => {
      console.log(`Server running on port: ${port}`);
    });
}
  
module.exports = app;