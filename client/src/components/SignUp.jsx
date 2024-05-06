import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css"
import axios from 'axios';
// import Joi from "joi";

export default function SignUp() {
  const [Username,setUsername] = useState('')
  const [Email,setEmail] = useState('')
  const [Password,setPassword] = useState('')

  const viewPassword = ()=>{
    const x = document.getElementById("PasswordBox")
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }

  // const schema = Joi.object({
  //   Username: Joi.string().min(6).max(15).required(),
  //   Email: Joi.string().email().required(),
  //   Password: Joi.string().required()
  // })

  const signupFunc = async(e)=>{
    e.preventDefault()
    // const data = {Username,Email,Password}
    // const { error } = schema.validate(data)
    // if(error){
    //   console.log(error)
    // }else{
      const response = await axios.post("http://localhost:3000/signup",{username:Username,email:Email,password:Password})
      console.log("Done")
    // }
  }

  return (
    <div id='signupPage'>
      <div id="signupBox">
        <h1 id='signupHead'>Sign up</h1>
        <form>
          <label>Username -</label><br />
          <input type="text" id="usernameBox" name='username' required  onChange={(e)=>setUsername(e.target.value)} /><br /><br />
          <label>Email -</label><br />
          <input type="email" id="emailBox" name='email' required onChange={(e)=>setEmail(e.target.value)}/><br /><br />
          <label>Password -</label><br />
          <input type="password" id='PasswordBox' name='password'  onChange={(e)=>setPassword(e.target.value)}/>
          <div id='showPass'>
            <input type="checkbox" id="showPasswordBox" onClick={viewPassword} /><h5 id='show'>Show Password</h5>
          </div>
        </form><br />
        <button id='signupBtn' onClick={signupFunc}>SIGN IN</button><br /><br />
        <button id='googleBtn'>Continue with Google <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" id="googleImg" /></button><br />
        <p id='loginLine'>Already Have an Account? <Link to="../login">Log In</Link></p><br />
      </div>
    </div>
  )
}
