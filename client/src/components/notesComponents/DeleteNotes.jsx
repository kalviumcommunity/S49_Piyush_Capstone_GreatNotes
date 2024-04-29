import React from 'react'
import "./DeleteNotes.css"

export default function DeleteNotes() {
  return (
    <div id='deleteModal'>
        <div id='deleteOption'>
            <h2>Do You want to delete topic1 ?</h2>
            <div>
                <button>Delete</button> <button><u>Cancel</u></button>
            </div>
        </div>
    </div>
  )
}
