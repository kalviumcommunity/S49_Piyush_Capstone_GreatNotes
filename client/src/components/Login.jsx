  import React, {useState} from 'react'
  import {Link} from "react-router-dom"
  import "./Login.css"
  import axios from 'axios'

  export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [errors, setErrors] = useState({})
    
    const viewPassword = () =>{
      const x = document.getElementById("passwordBox")
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    }

    const checkEmail = (email) =>{
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      if (email.trim() === '') {
        return "Email is Required"
      } else if (!emailRegex.test(email)) {
        return "Invalid Email Address"
      } else if(!emailData.includes(email)){
        return "This Email is not registered"
      }
    }

    const loginFunc = (e)=>{
      e.preventDefault()
      axios.post("http://localhost:3000/login",{email:email,password:password}).then(access=>{
        if(access.data.access === "AccessGranted"){
          console.log(access.data.username)
          localStorage.setItem('username',access.data.username)
          localStorage.setItem('email',email)
          localStorage.setItem('loggedInStatus',true)
          window.location.href = "/notes";
        } else if(access.data.access === "AccessDenied"){
          alert("Either Email or Password is incorrect...")
        }
      })
    }

    return (
      <div id='loginPage'>
        <div id='loginBox'>
          <h1 id='loginHead'>Login</h1>
          <form>
            <label>Email -</label><br />
            <input type="email" id='EmailBox' onChange={(e)=>setEmail(e.target.value)} /><br /><br />
            {/* {errors.email && <div id='error' style={{ color: 'red' }}>{errors.email}</div>} */}
            <label>Password -</label><br />
            <input type="password" id='passwordBox' onChange={(e)=>setPassword(e.target.value)} /><br />
            <div id='showPass'>
              <input type="checkbox" id="showPasswordBox" onClick={viewPassword}  /><h5 id='show'>Show Password</h5>
            </div>
            <br />
            <button id='loginBtn' onClick={loginFunc}>LOGIN</button>
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
