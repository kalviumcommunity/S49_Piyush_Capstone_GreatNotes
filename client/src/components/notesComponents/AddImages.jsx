import React from 'react'
import "./AddImages.css"

export default function AddImages() {
  return (
    <div id='AddImagesSection'>
        <input type="text" id='topicBar' placeholder='Enter Topic Name' value=""/>
        <h1 id='AddImagesHead'><u>Adding Images</u></h1>
        <div id='addImagesBox'>
            <input type="text" id="subTopicImages" placeholder='Add Sub Topic..'/>
            <input type='link' id="ImagesLink" placeholder='Add Images Link..' />
        </div>
        <button id='AddImagesBtn'>Add Images <img src="https://cdn-icons-png.flaticon.com/128/1829/1829586.png" id='image' /></button>
    </div>
  )
}
