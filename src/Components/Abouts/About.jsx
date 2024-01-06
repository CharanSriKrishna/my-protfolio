import React from 'react'
import './About.css'
import ME from '../../assests/charan3.jpg'
import {BiAward} from 'react-icons/bi'
import {BsPencil} from 'react-icons/bs'
import {AiOutlineFolder} from 'react-icons/ai'
import { motion } from 'framer-motion';

const about = () => {
  return (
    <section id='about'>

      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <motion.div
        whileInView={{ y: [150, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className='container about__container'
        >
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about image'/>
          </div>
        </div>
        <motion.div
        whileInView={{ y: [150, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        >
        <div className='about__content'>
          <div className='about__cards'>

            {/*<article className='about__card'>
              <BiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>One Month Internship</small>
  </article>*/}

            <article className='about__card'>
              <AiOutlineFolder className='about__icon'/>
              <a href="#portfolio">
                <h5>Projects</h5>
                <small>5+ Projects</small>
              </a>
            </article>

            <article className='about__card'>
              <BsPencil className='about__icon'/>
              <a href="#portfolio">
                <h5>Art Work</h5>
                <small>Digital and 3D Models</small>
              </a>
            </article>

          </div>
          <motion.div
            whileInView={{ y: [150, 0], opacity: [0, 1] }}
            transition={{ duration: 2 }}
            >
            <p>
              Hey! I am a developer, who is passionate about Artificial intelligence and i love to develop, work and learn about AI technologies. 
              Digital art and 3D modelling also has my attention.
            </p>

            <a href='#contacts' className='btn btn-primary'>Let's Talk</a>
          </motion.div>
          </div>
          
          </motion.div>
          </motion.div>
    </section>
  )
}

export default about