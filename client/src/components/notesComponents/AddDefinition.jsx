import React from 'react'
import "./AddDefinition.css"

export default function AddDefinition() {
  return (
    <div id='addDefinitionSection'>
        <input type="text" id='topicBar' placeholder='Enter Topic Name' value=""/>
        <h1 id='AddDefinitionHead'><u>Adding Definition</u></h1>
        <div id='addDefinitionBox'>
            <input type="text" id="subTopicDefinition" placeholder='Add Sub Topic..'/>
            <textarea id="textDefinition" placeholder='Add Definition..' />
        </div>
        <button id='AddDefinitionBtn'>Add Definition <img src="https://cdn-icons-png.flaticon.com/128/5027/5027435.png" id="definition" /></button>
    </div>
  )
}
