import React from 'react'
import './App.css'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Nav from './components/nav/Nav'
const App = () => {
  return (
    <div>
      <About/>
      <Nav/>
      <Experience/>
    </div>
  )
}

export default App
