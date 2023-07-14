import React from 'react'
import './nav.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineDesignServices} from 'react-icons/md'
import {MdWorkOutline} from 'react-icons/md'
import {RxDropdownMenu} from 'react-icons/rx'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")


  const [menuOpen, setMenuOpen] = useState(false)
  return (

      <nav>
        <div className='menu' onClick={()=>{
          setMenuOpen(!menuOpen)
        }}>
        <RxDropdownMenu />
        </div>

      <div className='menu-links'>
        <a href='#' onClick={() => setMenuOpen(false)} >
          <div className="nav-item">
            <BiHomeAlt2 />
            <span>ABOUT</span>
          </div>
        </a>

        <a href='#projects' onClick={() => setMenuOpen(false)} >
          <div className="nav-item">
            <MdOutlineDesignServices />
            <span>PROJECTS</span>
          </div>
        </a>

        <a href='#experience'onClick={() => setMenuOpen(!false)} >
          <div className="nav-item">
            <MdWorkOutline />
            <span>EXPERIENCE</span>
          </div>
        </a>
        </div>

      </nav>


  )
}

export default Nav
