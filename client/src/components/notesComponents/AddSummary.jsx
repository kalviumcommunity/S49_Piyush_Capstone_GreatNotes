import React from 'react'
import "./AddSummary.css"

export default function AddSummary() {
  return (
    <div id='addSummarySection'>
      <input type="text" id='topicBar' placeholder='Enter Topic Name' value=""/>
      <h1 id='AddSummaryHead'><u>Add Summary</u></h1>
      <div id='addSummaryBox'>
        <input type="text" id="subTopicSummary" placeholder='Add Sub Topic..'/>
        <textarea id="summaryText" placeholder='Enter Paragraph to get Summary'/>
        <h3 id='summary'>Summary-</h3>
        <textarea value="" id="summaryOutput" placeholder='Summary....'/>
      </div>
      <button id='AddSummaryBtn'>Add Summary <img src="https://cdn-icons-png.flaticon.com/128/1474/1474686.png" id="summaryLogo" /></button>
    </div>
  )
}
