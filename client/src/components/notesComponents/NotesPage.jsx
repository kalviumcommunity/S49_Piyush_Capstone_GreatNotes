import React from 'react'
import "./NotesPage.css"
import { Link } from 'react-router-dom'

export default function NotesPage() {
  return (
    <div>
        <input type="text" id='topicBar' placeholder='Enter Topic Name' />
        <div id='buttons'>
          <div><Link to='/notes/Createnotepage/addText'><button>Add Text <img src="https://cdn-icons-png.flaticon.com/128/588/588395.png" /></button></Link></div>
          <div><Link to='/notes/Createnotepage/addYoutube'><button>Add YouTube Video <img src="https://cdn-icons-png.flaticon.com/128/1383/1383260.png" /></button></Link></div>
          <div><Link to='/notes/Createnotepage/addVoiceRecording'><button>Add Voice Recording<img src="https://cdn-icons-png.flaticon.com/128/2489/2489351.png" /></button></Link></div>
          <div><Link to='/notes/Createnotepage/addImages'><button>Add Images <img src="https://cdn-icons-png.flaticon.com/128/1829/1829586.png" /></button></Link></div>
          <div><Link to='/notes/Createnotepage/addDefinition'><button>Add Definition <img src="https://cdn-icons-png.flaticon.com/128/5027/5027435.png" /></button></Link></div>
          <div><Link to='/notes/Createnotepage/addSummary'><button>Add Summary <img src="https://cdn-icons-png.flaticon.com/128/1474/1474686.png" /></button></Link></div>
        </div>
    </div>
  )
}
