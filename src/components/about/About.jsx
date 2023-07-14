import React from 'react'
import './about.css'
import Social from './Social'
import MEMOJI from '../../assets/img/memoji.PNG'

const About = () => {
  return (
    <section id='about'>

      <header >

        <div className='container about__container'>

          <div className='about-items information'>
            <h1>Gilen Wu Hou </h1>
            <p>A passionate Full Stack Software Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.</p>
            <Social/>
          </div>
          <div className='about-items picture'>
          <img src={MEMOJI} alt='me' />
          </div>

        </div>

      </header>


    </section>


  )
}

export default About
