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
            <p className='summary'>
              Hi! I'm Gilen, a passionate and driven Junior student at UCSD, majoring in Computer Science. I have a keen interest in software engineering, full-stack web development, machine learning, and data analysis. I am actively seeking opportunities to apply my knowledge and gain valuable experience. If you're looking for a dedicated and collaborative team member, please feel free to reach out!
            </p>
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
