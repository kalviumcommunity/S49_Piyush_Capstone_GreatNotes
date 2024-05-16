import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "./Login.css"
import axios from 'axios'

export default function Login() {
  
  const viewPassword = () =>{
    const x = document.getElementById("passwordBox")
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }

  return (
    <div id='loginPage'>
      <div id='loginBox'>
        <h1 id='loginHead'>Login</h1>
        <form>
          <label>Email -</label><br />
          <input type="email" id='EmailBox' /><br /><br />
          <label>Password -</label><br />
          <input type="password" id='passwordBox' /><br />
          <div id='showPass'>
            <input type="checkbox" id="showPasswordBox" onClick={viewPassword} /><h5 id='show'>Show Password</h5>
          </div>
          <br />
          <button id='loginBtn'>LOGIN</button>
          <br /><br />
        </form>
        <button id='googleBtn'>Continue with Google <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" id="googleImg" /></button>
        <br />
        <p id='signupLine'>Dont have an Account? <Link to="../signup">Sign Up</Link></p>
        <br />
      </div>
    </div>
  )
}
