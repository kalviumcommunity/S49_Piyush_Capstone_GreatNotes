import React from 'react'
import "./AddText.css"

function AddText() {
  return (
    <div id='addTextSection'>
        <input type="text" id='topicBar' placeholder='Enter Topic Name' value=""/>
        <div id='addTextArea'>
            <h1 id='addTextHead'><u>Adding Text</u></h1>
            <div id='addTextBox'>
                <input type="text" id="subTopicText" placeholder='Add Sub Topic..'/>
                <textarea type="text" id="textContent" placeholder='Add Description..'/>
            </div>
        </div>
        <button id='addTextBtn'>Add Text <img src="https://cdn-icons-png.flaticon.com/128/588/588395.png" /></button>
    </div>
  )
}

export default AddText