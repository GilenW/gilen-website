import React from 'react'

import { experience } from './experience-list'
import './experience.css'

const ExperienceCard = ({index,name,date,position})=>{
  return(
    <div className='experience-card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{position}</p>
    </div>
  )
}

const Experience = () => {
  return (
    <section id='experience'>
        <h2>EXPERIENCE</h2>

        <div className='container experience-container'>
          {experience.map((experience, index)=>(
            <ExperienceCard
              key={`experience-${index}`}
              index={index}
              {...experience}
            />
          ))}
        </div>

    </section>
  )
}

export default Experience
