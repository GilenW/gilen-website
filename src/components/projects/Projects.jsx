import React from 'react'
import img1 from '../../assets/img/proj-img.png'
import './projects.css'


const Projects = () => {
  return (

    <section id='projects'>
        <h2>My Recent Projects</h2>
        <div className='container project__container'>
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

                {/* Image */}
                {/* Title */}
                {/* Tool */}
                {/* Buttons */}
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

                {/* Image */}
                {/* Title */}
                {/* Tool */}
                {/* Buttons */}
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

                {/* Image */}
                {/* Title */}
                {/* Tool */}
                {/* Buttons */}
            </article>

        </div>

    </section>
  )
}

export default Projects

