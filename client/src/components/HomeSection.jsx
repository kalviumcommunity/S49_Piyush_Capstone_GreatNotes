import React from 'react'
import Logo from "../images/logo.png"
import "./HomeSection.css"

export default function HomeSection() {
  return (
    <div>
      <div id='logoImg' />
      <div id="blackFilter"/>
      <div id='logoSec'>
        <div>
          <img src={Logo} id='Logo'/>
        </div>
        <div>
        <h4></h4>
        </div>
      </div>
      
      
    </div>
  )
}
