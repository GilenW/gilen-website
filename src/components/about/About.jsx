import React from 'react'
import './about.css'
import Social from './Social'
import AvatarOne from '../../assets/img/myAvatar.png'
import AvatarTwo from '../../assets/img/myAvatar-2.png'

import background from '../../assets/img/side-wave_background.svg'
import { useState } from 'react'

const About = () => {


  const [avatarSource, setAvatar] = useState(AvatarTwo)
  const [showBg, setBg] = useState(false)

  const handleMouseOver = () =>{
    setAvatar(AvatarOne)
    setBg(true)
  }
  const handleMouseOut = () =>{
    setAvatar(AvatarTwo)
    setBg(false)
  }




  return (
    <section id='about'>


<img src={background} className='background-img'></img>

        <div className='container about__container'>

          <div className='about-items information'>
            <h1>Gilen Wu Hou </h1>
            <p>A passionate Full Stack Software Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.</p>
            <Social/>
          </div>


          <div className='about-items picture'>


            <img src={avatarSource} alt='me' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
            <div className={showBg ? 'picture-bg one': ''}></div>
            {/* <div className={showBg ? 'picture-bg two': ''}></div>
            <div className={showBg ? 'picture-bg three': ''}></div> */}
            {/* <div className='picture-bg one'></div> */}
            {/*
            <div className='picture-bg two'></div>
            <div className='picture-bg three'></div> */}


          </div>

        </div>


    </section>


  )
}

export default About
