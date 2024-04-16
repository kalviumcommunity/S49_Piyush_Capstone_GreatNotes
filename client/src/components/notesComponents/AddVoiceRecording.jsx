import React from 'react'
import "./AddVoiceRecording.css"

export default function AddVoiceRecording() {
  return (
    <div id='addVoiceRecordingSection'>
        <input type="text" id='topicBar' placeholder='Enter Topic Name' value=""/>
        <h1 id='AddVoiceRecordingHead'><u>Adding Voice Recording</u></h1>
        <div id='addVoiceRecordingBox'>
            <input type="text" id="subTopicVoiceRecording" placeholder='Add Sub Topic..'/>
            <input type='link' id="VoiceRecordingLink" placeholder='Add Voice Recording Link..' />
        </div>
        <button id='AddVoiceRecordingBtn'>Add Voice Recording <img src="https://cdn-icons-png.flaticon.com/128/2489/2489351.png" id='voice'/></button>
    </div>
  )
}
