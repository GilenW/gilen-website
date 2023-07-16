import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Social = () => {
  return (
    <div className='about_socials'>
      <a href="https://www.linkedin.com/in/gilen/" target='_blank'><BsLinkedin/> </a>
      <a href="https://github.com/GilenW" target='_blank'><BsGithub/></a>

    </div>
  )
}

export default Social
