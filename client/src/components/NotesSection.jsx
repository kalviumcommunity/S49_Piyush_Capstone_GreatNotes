import React from 'react'

export default function NotesSection() {
  return (
    <div>
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
    </div>
  )
}
