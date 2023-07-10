import React from 'react'
import './about.css'
import Social from './Social'
const About = () => {
  return (
    <header>

      <div className='container about__container'>
        <h5> Hello I'm</h5>
        <h1>Gilen Wu Hou </h1>
      {/* social medias contact */}
      <Social/>
      </div>



    </header>
  )
}

export default About
