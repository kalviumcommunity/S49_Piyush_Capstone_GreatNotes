import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./NotesSection.css"
import axios from "axios" 
import DeleteNotes from './notesComponents/DeleteNotes';

export default function NotesSection({name}) {
  const [notesData,setNotesData] = useState([])
  const [deleteState,setDeleteState] = useState(false)
  useEffect(()=>{
    axios.get("http://localhost:3000/notes_title").then(j=>setNotesData(j.data))
  },[])
  return (
    <div>
      <div id="createNotesImg" />
      <div id="createNotesBlackCover" />
      <div id="createNotes">
        <h1>Notes Section.....</h1>
        <Link to="/notes/Createnotepage"><button>Create New Notes</button></Link>
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
      <div id='notesSection'>
        {notesData.filter((i)=>i.username===name).map((note) => (
          <div id='notesBar'>
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png" id="deleteBtn" onClick={()=>{
              setDeleteState(true)
            }} />
            <h2>{note.title_name}</h2>
            <p>Created on {note.date} </p>
            <DeleteNotes topicName={note.title_name} />
          </div>
        ))}
        
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  )
}
