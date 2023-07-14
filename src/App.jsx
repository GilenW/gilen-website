import React from 'react'
import './App.css'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'
const App = () => {
  return (
    <div>
      <About/>
      <Nav/>
      <Projects/>
      <Experience/>
    </div>
  )
}

export default App
