import React from 'react'
import Logo from "../images/logo.png"
import "./HomeSection.css"

export default function HomeSection() {
  return (
    <div id="home">
      <div id='logoImg' />
      <div id="blackFilter1"/>
      <div id='logoSec'>
        <div>
          <img src={Logo} id='Logo'/>
        </div>
        <div>
        <h2>Simplify  Study  Succeed !!!</h2>
        </div>
      </div>
      <div id='intro'>
        <h1>What is Great Notes ??</h1>
        <p>GreatNotes is a simple and intuitive web application designed to help students manage their notes. It allows users to create, edit, and organize their notes in a convenient and  user-friendly interface. However, it is not just an ordinary note-taking application. It offers several features that make it a powerful tool for managing notes.</p>
      </div>
      {/* <div id='features'>
        vnejkngwegugbreijgij hgoerhiuwgjer euoghurehg erughuerhg iuerghuoh uerg uer uhg eu hu uer  8rehegherh uoh   
      </div>
      <div id='blackFilter2' /> */}
    </div>
  )
}
