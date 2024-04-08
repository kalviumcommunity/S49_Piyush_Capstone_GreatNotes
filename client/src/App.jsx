import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import logo from"./images/logo.png"
import NotesSection from './components/NotesSection'
import HomeSection from './components/HomeSection';
import AboutUsSection from "./components/AboutUsSection"
import NotesPage from "./components/notesComponents/NotesPage"

function App() {
  return (
    <BrowserRouter>
    <>
      <nav>
        <div id='navbar'>
          <div id="logo">
            <img src={logo} />
          </div>
          <div id='links'>
            <Link to="/" style={{color:'black'}}><h6>HOME</h6></Link>
            <Link to="/aboutus" style={{color:'black'}}><h6>ABOUT US</h6></Link>
            <Link to="/notes" style={{color:'black'}}><h6>NOTES</h6></Link>
          </div>
          <div id='accountSec'>
            <div id='accountImg'>
              <img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" />
            </div>
            <div id='accountDet'>
              Hey Kai <br />
              <button id='Signout'>Sign out</button>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<HomeSection />}/>
        <Route path='/aboutus' element={<AboutUsSection />}/>
        <Route path='/notes' element={<NotesSection />}/>
        <Route path='/notes/Createnotepage' element={<NotesPage />}/>
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
