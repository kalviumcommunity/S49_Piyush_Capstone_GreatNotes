import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./NotesSection.css"
import axios from "axios" 
import DeleteNotes from './notesComponents/DeleteNotes';

export default function NotesSection({name}) {
  const [notesData,setNotesData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/notes_data").then(j=>setNotesData(j.data))
  },[])
  const titleArray = new Set(notesData.filter((i)=>i.username===name).map((j)=>j.title))
  console.log(titleArray)
  return (
    <div>
      <DeleteNotes />
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
        {[...titleArray].map((note) => (
          <div id='notesBar'>
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png" id="deleteBtn" />
            <h2>{note}</h2>
            <p>Created on 18 April 2024 </p>
          </div>
        ))}
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  )
}
