import React from 'react'
import img1 from '../../assets/img/proj-img.png'
import './projects.css'
import {projects} from './projects-list'

import {Tilt} from "react-tilt";
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../../utils/motion";
import {styles} from "../../utils/styles"



const ProjectCard = ({index, name, tags, source_link})=>{
    return (
    <div className="project-card">

        <p>{name}</p>

        {/* <img src={img1} alt='' className='project-img'></img> */}
        <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag.name}</li>
        ))}
      </ul>
    </div>
    )
}




const Projects = () => {
  return (

    <section id='projects'>
        <h2>My Recent Projects</h2>

        <div className='project-container'>




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
