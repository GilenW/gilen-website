import React from 'react'
import './nav.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineDesignServices} from 'react-icons/md'
import {MdWorkOutline} from 'react-icons/md'
import {RxDropdownMenu} from 'react-icons/rx'
import { useState } from 'react'


const Nav = () => {


  const [menuOpen, setMenuOpen] = useState(false)
  return (

      <nav>
        <div className='menu-toggle' onClick={()=>{setMenuOpen(!menuOpen)}}>
        <RxDropdownMenu />
        </div>

      <ul className={menuOpen ?  "open" : ""}>

        <li>
        <a href='#' >
          <div className="nav-item">
            <BiHomeAlt2 />
            <span>ABOUT</span>
          </div>
        </a>
        </li>

        
        <li>
        <a href='#experience' >
          <div className="nav-item">
            <MdWorkOutline />
            <span>EXPERIENCE</span>
          </div>
        </a>
        </li>

        <li>
        <a href='#projects'>
          <div className="nav-item">
            <MdOutlineDesignServices />
            <span>PROJECTS</span>
          </div>
        </a>
        </li>



        </ul>

      </nav>


  )
}

export default Nav
