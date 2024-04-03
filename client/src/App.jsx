import React from 'react'
import './App.css'
import logo from"./images/logo.png"

function App() {
  return (
    <>
      <nav>
        <div id='navbar'>
          <div id="logo">
            <img src={logo} />
          </div>
          <div id='links'>
            <h6>HOME</h6>
            <h6>ABOUT US</h6>
            <h6>NOTES</h6>
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
      <div id="createNotesImg" />
      <div id="createNotesBlackCover" />
      <div id="createNotes">
        <h1>Notes Section.....</h1>
        <button>Create New Notes</button>
      </div>
      <div id='notesSearch'>
        <div id='SearchBar'>
          <input type="text" placeholder='Search Notes...' />
        </div>
        <div id='sort'>
          <select id="sortBtn">
            <option>Sort By</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default App
