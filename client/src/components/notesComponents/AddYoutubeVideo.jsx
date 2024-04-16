import React from 'react'
import "./AddYoutubeVideo.css"

export default function AddYoutubeVideo() {
  return (
    <div id='addYouTubeVideoSection'>
        <input type="text" id='topicBar' placeholder='Enter Topic Name' value=""/>
        <h1 id='AddYoutubeHead'><u>Adding YouTube Video</u></h1>
        <div id='addYoutubeVideoBox'>
            <input type="text" id="subTopicYouTubeVideo" placeholder='Add Sub Topic..'/>
            <input type='link' id="YoutubeVideoLink" placeholder='Add YouTube Video Link..' />
        </div>
        <button id='AddYoutubeBtn'>Add YouTube Video <img src="https://cdn-icons-png.flaticon.com/128/1383/1383260.png" id='youtube' /></button>
    </div>
  )
}
