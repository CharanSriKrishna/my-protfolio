import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const services = () => {
  return (
    <section id ='work'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">


        <article className='service'>
          <div className="service__head">
            <h3>Software Development</h3>
          </div>

          <ul className='service__list'>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Have experience in Python, Java, C</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Provide solution for problems</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Make creative and inovative solution</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Able to test and decode codes</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Have experience in SQL</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3> Machine Learning </h3>
          </div>

          <ul className='service__list'>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Provide solutions to Real World problems</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Understanding of different ML algorithms</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Have Experience with R and Python</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Can make custom Models</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Perform Statistic analysis on data</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Digital Work</h3>
          </div>

          <ul className='service__list'>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Experiance with 2D artworks</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>I Make landscape art works</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Have experiance with blender</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Able to make simple animations</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Make 3D objects with blender</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Design 2D Character</p>
            </li>
          </ul>
        </article>

        {/*<article className='service'>
          <div className="service__head">
            <h3>Game Development</h3>
          </div>

          <ul className='service__list'>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Have experience with Unreal Engine</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Code using C++</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Make Simple Games</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Able to use Pygame</p>
            </li>
            <li> 
              <BsCheck className='service__list-icon'/>
              <p>Can make 3D objects</p>
            </li>
          </ul>
  </article>*/}

      </div>
    </section>
  )
}

export default services