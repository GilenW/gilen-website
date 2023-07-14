import React from 'react'
import './nav.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineDesignServices} from 'react-icons/md'
import {MdWorkOutline} from 'react-icons/md'

import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (

    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active':''}><BiHomeAlt2/></a>

      <a href='#projects' onClick={()=> setActiveNav('projects')} className={activeNav === 'projects' ? 'active':''}><MdOutlineDesignServices/></a>


      <a href='#experience' onClick={()=> setActiveNav('experience')} className={activeNav === 'experience' ? 'active':''}><MdWorkOutline/></a>

    </nav>
  )
}

export default Nav
