import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from"./images/logo.png"
import NotesSection from './components/NotesSection'
import HomeSection from './components/HomeSection';
import AboutUsSection from "./components/AboutUsSection"
import NotesPage from "./components/notesComponents/NotesPage"
import AddText from './components/notesComponents/AddText';
import AddYoutubeVideo from './components/notesComponents/AddYoutubeVideo';
import AddVoiceRecording from './components/notesComponents/AddVoiceRecording';
import AddImages from './components/notesComponents/AddImages';
import AddDefinition from './components/notesComponents/AddDefinition';
import AddSummary from './components/notesComponents/AddSummary';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotesTitle from './components/notesComponents/NotesTitle';

function App() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [loggedInStatus,setLoggedInStatus] = useState(false)
  
  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedInStatus')
    console.log("Logged in Status-",loggedIn)
    if (loggedIn) {
      setLoggedInStatus(true)
      setName(localStorage.getItem('username'))
      setEmail(localStorage.getItem('email'))
    }
  },[])

  const signoutFunc=()=>{
    localStorage.setItem('loggedInStatus',false)
    setLoggedInStatus(false)
    localStorage.setItem('username',"")
    setName("")
    localStorage.setItem('email',"")
    window.location.href="/notes"
  }
  return (
    <BrowserRouter>
    <>
      <nav>
        <div id='navbar'>
          <div id="logo">
            <Link to="/notes"><img src={logo} /></Link>
          </div>
          <div id='links'>
            <Link to="/" style={{color:'black'}}><h6>HOME</h6></Link>
            <Link to="/aboutus" style={{color:'black'}}><h6>ABOUT US</h6></Link>
            <Link to="/notes" style={{color:'black'}}><h6>NOTES</h6></Link>
          </div>
          {name?(
          <div id='accountSec'>
            <div id='accountImg'>
              <img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" />
            </div>
            <div id='accountDet'>
              Hey {name} <br />
              <button id='Signout' onClick={signoutFunc}>Sign out</button>
            </div>
          </div>
        ):(
          <div id='loginSec'>
            <Link to="/login"><button>Login</button></Link> <Link to="/signup"><button>Sign Up</button></Link>
          </div>
        )}
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<HomeSection />}/>
        <Route path='/aboutus' element={<AboutUsSection />}/>
        <Route path='/notes' element={<NotesSection email={email} />}/>
        <Route path='/notes/Createnotestitle' element={<NotesTitle/>}/>
        <Route path='/notes/Notepage/:id' element={<NotesPage />}/>
        <Route path='/notes/Notepage/:id/addText' element={<AddText/>}/>
        <Route path='/notes/Notepage/:id/addYoutube' element={<AddYoutubeVideo/>}/>
        <Route path='/notes/Notepage/:id/addVoiceRecording' element={<AddVoiceRecording/>}/>
        <Route path='/notes/Notepage/:id/addImages' element={<AddImages/>}/>
        <Route path='/notes/Notepage/:id/addDefinition' element={<AddDefinition/>}/>
        <Route path='/notes/Notepage/:id/addSummary' element={<AddSummary/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App