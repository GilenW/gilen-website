import React from 'react'
import img1 from '../../assets/img/proj-img.png'
import './projects.css'
import {projects} from './projects-list'

import {Tilt} from "react-tilt";
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../../utils/motion";
import {styles} from "../../utils/styles"
import {AiOutlineCodeSandbox} from 'react-icons/ai'


const ProjectCard = ({index, name, date,tags, source_link,description})=>{
    return (
    <div className="project-card">

        <div className='face face1'>
        <AiOutlineCodeSandbox className='project-icon'/>
        <h3>{name}</h3>
        <h4 className='date'>{date}</h4>
        {/* <img src={img1} alt='' className='project-img'></img> */}
        <ul>
        {tags.map((tag, index) => (
          <li key={index}>»{tag.name}</li>
        ))}
      </ul>
        </div>

        <div className='face face2'>
            <p>{description}</p>
            <a href={source_link} target='_blank'>Github</a>
        </div>

    </div>
    )
}




const Projects = () => {
  return (

    <section id='projects'>
        <h2>PROJECTS</h2>

        <div className='container project-container'>




            {projects.map((project, index)=>(
                <ProjectCard
                    key={`project-${index}`}
                    index = {index}
                    {...project}
                    />

            ))}


        </div>



    </section>
  )
}

export default Projects

        {/* <div className='container project__container'>
            <article className='project_item'>
                <h3>This is the project title</h3>

                <div className='project_item_img'>
                    <img src={img1} alt=''></img>
                </div>

                <h4>Skills applied in this project</h4>
                <div className='project_item_btn'>
                    <a href='https://github.com' className='btn' target='_blank'>Github</a>
                    <a href='https://github.com' className='btn' target='_blank'>Live Demo</a>
                </div>
            </article>

            <article className='project_item'>
                <h3>This is the project title</h3>
                <div className='project_item_img'>
                    <img src={img1} alt=''></img>

                </div>
                <h4>Skills applied in this project</h4>
                <div className='project_item_btn'>
                    <a href='https://github.com' className='btn' target='_blank'>Github</a>
                    <a href='https://github.com' className='btn' target='_blank'>Live Demo</a>
                </div>

            </article>

            <article className='project_item'>
                <h3>This is the project title</h3>
                <div className='project_item_img'>
                    <img src={img1} alt=''></img>

                </div>
                <h4>Skills applied in this project</h4>
                <div className='project_item_btn'>
                    <a href='https://github.com' className='btn' target='_blank'>Github</a>
                    <a href='https://github.com' className='btn' target='_blank'>Live Demo</a>
                </div>

            </article>

        </div> */}
