import React from 'react'
import './NotesTitle.css'
import { Link } from 'react-router-dom'

export default function NotesTitle() {
  return (
    <div>
        <input type="text" id='topicBar' placeholder='Enter Topic Name' />
        <Link to="/notes/Createnotepage"><button id='setNotesTitle'>Set Notes Title</button></Link>
    </div>
  )
}
