import React from 'react'
import './portfolio.css'
import Art from '../../assests/art.jpg'
import Project from '../../assests/sde.png'
import Gameproj from '../../assests/game.png'
import MLproj from '../../assests/mlart.png'

const data=[
  {
    id:1,
    image: MLproj,
    title: "ML Projects",
    Github: '#Home',
    demo : '#Home'
  },
  {
    id:2,
    image: Project,
    title: "Projects",
    Github: '#Home',
    demo : '#Home'
  },
  {
    id:3,
    image: Art,
    title: "Art Work",
    Github: '#Home',
    demo : '#Home'
  },
  {
    id:4,
    image: Gameproj,
    title: "Game Project",
    Github: '#Home',
    demo : '#Home'
  },
]
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>

      <div className='container protfolio__container'>

        {
          data.map(({id, image,title,Github,demo}) =>{
            return(
              <article key={id} className='protfolio__item'>
              <div className='protfolio__item-image'>
                <img src={image} alt={title}/>
              </div>
                <h3>{title}</h3>
                <div className="protfolio__item-cta">
                  <a href={Github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn' btn-primary target="_blank">Images</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
)
}

export default portfolio