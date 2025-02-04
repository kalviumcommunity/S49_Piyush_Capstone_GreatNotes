import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css"
import axios from 'axios';

export default function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const [disableStatus,setDisableStatus] = useState(false)

  const [errors, setErrors] = useState({})
  
  const [emailData,setEmailData] = useState([])
  useEffect(()=>{
    axios.get("https://s49-piyush-capstone-greatnotes.onrender.com/users_data/emails").then((i)=>setEmailData(i.data.email))
  },[])

  const checkUsername = (username) =>{
    if (username.trim()==='') {
      return "Username is Required"
    } else if (username.length < 6 || username.length > 13) {
      return "Username should be between 6 and 13 characters"
    } 
  }

  const checkEmail = (email) =>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (email.trim() === '') {
      return "Email is Required"
    } else if (!emailRegex.test(email)) {
      return "Invalid Email Address"
    } else if(emailData.includes(email)){
      return "This Email is already registered"
    }
  }

  const checkPassword = (password) =>{
    if (password.trim() === '') {
      return 'Password is required'
    } else if (password.length < 6) {
      return "Password should have min 6 characters."
    }
    return '';
  };

  const viewPassword = () =>{
    const x = document.getElementById("PasswordBox")
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }

  const signupFunc = async (e) =>{
    e.preventDefault()

    const errors = {}
    const usernameError = checkUsername(username)
    const emailError = checkEmail(email)
    const passwordError = checkPassword(password)
    if (usernameError) {
      errors.username = usernameError
    } else if (emailError) {
      errors.email = emailError
    }else if (passwordError) {
      errors.password = passwordError
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setDisableStatus(true)
      localStorage.setItem('loggedInStatus',true)
      const response = await axios.post("https://s49-piyush-capstone-greatnotes.onrender.com/signup", { username, email, password })
      localStorage.setItem('username',username)
      localStorage.setItem('email',email)
      alert("You have Logged in...")
      window.location.href = "../notes";
    }
  };

  return (
    <div id='signupPage'>
      <div id="signupBox">
        <h1 id='signupHead'>Sign up</h1>
        <form>
          <label>Username -</label><br />
          <input type="text" id="usernameBox" name='username' required value={username} onChange={(e) => setUsername(e.target.value)} />
          {errors.username && <div id='error' style={{ color: 'red' }}>{errors.username}</div>}<br /><br />
          <label>Email -</label><br />
          <input type="email" id="emailBox" name='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <div id='error' style={{ color: 'red' }}>{errors.email}</div>}<br /><br />
          <label>Password -</label><br />
          <input type="password" id='PasswordBox' name='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <div id='error' style={{ color: 'red' }}>{errors.password}</div>}
          <div id='showPass'>
            <input type="checkbox" id="showPasswordBox" onClick={viewPassword} /><h5 id='show'>Show Password</h5>
          </div>
        </form><br />
        <button id='signupBtn' onClick={signupFunc} disabled={disableStatus}>SIGN IN</button><br /><br />
        <button id='googleBtn'>Continue with Google <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" id="googleImg" /></button><br />
        <p id='loginLine'>Already Have an Account? <Link to="../login">Log In</Link></p><br />
      </div>
    </div>
  )
}
