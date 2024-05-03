import React from 'react'
import "./DeleteNotes.css"

export default function DeleteNotes({topicName}) {
  return (
    <div id='deleteModal' style={{display:"none"}}>
        <div id='deleteOption'>
            <h2>Do you want to delete {topicName} ?</h2>
            <div>
                <button id='deleteButton'>Delete</button> <button id='cancelButton'><u>Cancel</u></button>
            </div>
        </div>
    </div>
  )
}
