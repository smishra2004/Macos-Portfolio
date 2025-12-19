import { Navbar, Welcome, Dock } from '#components'
import gsap from "gsap";
import { Draggable } from 'gsap/Draggable'
import { Terminal } from '#windows';
gsap.registerPlugin(Draggable);
import React from 'react'

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
    </main>
  )
}

export default App
