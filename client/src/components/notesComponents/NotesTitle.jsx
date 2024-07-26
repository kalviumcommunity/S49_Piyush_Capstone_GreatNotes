import React, { useState } from 'react'
import './NotesTitle.css'
import axios from "axios"

export default function NotesTitle() {
  const [noteTitle, setNoteTitle] = useState('')
  const rn = new Date()
  const date = rn.getDate()
  const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
  const month = monthNames[rn.getMonth()]
  const year = rn.getFullYear()
  const finalDate = `${month} ${date} ${year}`
  const addNoteTitle = (e) => {
    if(noteTitle){
      axios.post("http://localhost:3000/add_title",{username:localStorage.getItem("username"),email:localStorage.getItem("email"),title_name:noteTitle,date:finalDate}).then(()=>console.log("done"))
      window.location.href ="/notes"
    } else{
      alert("Enter the Notes Title...")
    }
  }
  return (
    <div>
      <input type="text" id='topicBar' placeholder='Enter Topic Name' onChange={(e) => setNoteTitle(e.target.value)}/>
      <button id='setNotesTitle' onClick={addNoteTitle}>Set Notes Title</button>
    </div>
  )
}
