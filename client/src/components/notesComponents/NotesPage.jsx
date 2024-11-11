import React, { useEffect, useState } from 'react'
import "./NotesPage.css"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
// import NotesTitle from './NotesTitle'

export default function NotesPage() {
  const { id } = useParams()
  const [noteTitle,setNoteTitle]=useState("")
  const [email,setEmail]=useState("")
  const [username,setUsername]=useState("")
  const [notesData,setNotesData]=useState([])
  useEffect(()=>{
    axios.post(`http://localhost:3000/title/${id}`).then((a)=>(setEmail(a.data.email),setUsername(a.data.uname),setNoteTitle(a.data.titleName)))
  },[])
  useEffect(()=>{
    axios.get("http://localhost:3000/notes_data").then((b)=>setNotesData(b.data))
  },[])
  return (
    <div>
        <input type="text" id='topicBar' placeholder='Enter Topic Name' value={noteTitle} />
        <div id='buttons'>
          <div><Link to={`/notes/Notepage/${id}/addText`}><button>Add Text <img src="https://cdn-icons-png.flaticon.com/128/588/588395.png" /></button></Link></div>
          <div><Link to={`/notes/Notepage/${id}/addYoutube`}><button>Add YouTube Video <img src="https://cdn-icons-png.flaticon.com/128/1383/1383260.png" /></button></Link></div>
          <div><Link to={`/notes/Notepage/${id}/addVoiceRecording`}><button>Add Voice Recording<img src="https://cdn-icons-png.flaticon.com/128/2489/2489351.png" /></button></Link></div>
          <div><Link to={`/notes/Notepage/${id}/addImages`}><button>Add Images <img src="https://cdn-icons-png.flaticon.com/128/1829/1829586.png" /></button></Link></div>
          <div><Link to={`/notes/Notepage/${id}/addDefinition`}><button>Add Definition <img src="https://cdn-icons-png.flaticon.com/128/5027/5027435.png" /></button></Link></div>
          <div><Link to={`/notes/Notepage/${id}/addSummary`}><button>Add Summary <img src="https://cdn-icons-png.flaticon.com/128/1474/1474686.png" /></button></Link></div>
        </div>
        <div id='dataBox'>
          {notesData.filter(i=>i.email===email).filter(i=>i.topic==noteTitle).map((note)=>(
            <div>
              <br />
            <div id='mainBox'>
              <div id='subTopicBox'><b>{note.sub_topic} -</b></div><br />
              <div id='noteContent'>{note.text_notes}</div>
              <div id='noteContent'>{note.summary}</div>
              <div id='noteContent'><img src={note.image_link} /></div>
              {note.youtube_link && (<div id='noteContent'><iframe width="560" height="315" src={`https://www.youtube.com/embed/${note.youtube_link}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>)}
              <div id='termTitle'>{note.term}</div>
              <div id='noteContent'>{note.definition}</div>
              <br />
            </div>
            <br />
            </div>
          ))}
        </div>
    </div>
  )
}
