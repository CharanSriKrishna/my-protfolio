import React from 'react'
import './About.css'
import ME from '../../assests/charan1.jpg'
import {BiAward} from 'react-icons/bi'
import {BsPencil} from 'react-icons/bs'
import {AiOutlineFolder} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <BiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>One Month Internship</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolder className='about__icon'/>
              <h5>projects</h5>
              <small>5+ Projects</small>
            </article>

            <article className='about__card'>
              <BsPencil className='about__icon'/>
              <h5>ArtWorks</h5>
              <small>Many Designs and Models</small>
            </article>

          </div>
          <p>
          Confident and reliable computer science student who is eager to learn 
          current trends and to help create meaningful projects to help community.
          </p>

          <a href='#contacts' className='btn btn-primary'>Let's Talk</a>
        </div>
        
      </div>
    </section>
  )
}

export default about