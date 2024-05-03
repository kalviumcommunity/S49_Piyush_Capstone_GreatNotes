import React from 'react'
import {Link} from "react-router-dom"
import "./Login.css"

export default function Login() {
  return (
    <div id='loginPage'>
      <div id='loginBox'>
        <h1 id='loginHead'>Login</h1>
        <form>
          <label>Email or Username -</label><br />
          <input type="text" id='usernameEmailBox' /><br /><br />
          <label>Password -</label><br />
          <input type="text" id='passwordBox' /><br />
          <div id='showPass'>
            <input type="checkbox" id="showPasswordBox" /><h5 id='show'>Show Password</h5>
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
