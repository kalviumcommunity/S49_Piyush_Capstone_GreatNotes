import React from 'react'
import { Link } from 'react-router-dom'
import "./SignUp.css"

export default function SignUp() {
  return (
    <div id='signupPage'>
      <div id="signupBox">
        <h1 id='signupHead'>Sign up</h1>
        <form>
          <label>Username -</label><br />
          <input type="text" id="usernameBox" /><br /><br />
          <label>Email -</label><br />
          <input type="text" id="emailBox" /><br /><br />
          <label>Password -</label><br />
          <input type="password" id='PasswordBox' />
          <div id='showPass'>
            <input type="checkbox" id="showPasswordBox" /><h5 id='show'>Show Password</h5>
          </div>
        </form><br />
        <button id='signupBtn'>SIGN IN</button><br /><br />
        <button id='googleBtn'>Continue with Google <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" id="googleImg" /></button><br />
        <p id='loginLine'>Already Have an Account? <Link to="../login">Log In</Link></p><br />
      </div>
    </div>
  )
}
