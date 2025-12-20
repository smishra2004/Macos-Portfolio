import { Navbar, Welcome, Dock, Home } from '#components'
import gsap from "gsap";
import { Draggable } from 'gsap/Draggable'
import {Terminal, Resume, Safari, Finder, Text, Image, Contact } from '#windows';
gsap.registerPlugin(Draggable);
import React from 'react'

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
    </main>
  )
}

export default App
