import React from 'react'
import './Experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Skills/Experience</h2>

      <div className='container experience__container'>
        <div className="experience__tecnical">
            <h3> Technical Skills</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>Machine Learning</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>SQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              {/*
              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>R</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>C++</h4>
                  <small className='text-light'>Beginner</small>
                </div>
  </article>*/}

              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>C</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>HTML & CSS</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
          </div>


        <div className='experience__otherskills'>
          <h3>Other Skills</h3>
              <div className="experience__content2">
                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon'/>
                  <div>
                    <h4>Digital Art</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon'/>
                  <div>
                   <h4>3D Modelling</h4>
                   <small className='text-light'>Beginner</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon'/>
                  <div>
                    <h4>3D Animation</h4>
                    <small className='text-light'>Beginner</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon'/>
                  <div>
                    <h4>Blender</h4>
                    <small className='text-light'>Beginner</small>
                  </div>
                </article>

                </div>
              </div>


        <div className='experience__softskills'>
            <h3>Soft Skills</h3>
              <div className="experience__content2">
                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon'/>
                  <div>
                    <h4>Communication</h4>
                  </div>
                </article>

                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon'/>
                  <div><h4>Leadership</h4></div>
                </article>

                <article className='experience__details'>
                  <AiOutlineCheckCircle className='experience__details-icon'/>
                  <div><h4>Creativity</h4></div>
                </article>
              </div>
            </div>
       </div>


    </section>
  )
}

export default Experience