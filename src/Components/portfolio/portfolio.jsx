import React from 'react'
import './portfolio.css'
import Art from '../../assests/art.png'
import Project from '../../assests/sde.png'
import Gameproj from '../../assests/game.png'
import MLproj from '../../assests/mlart.png'

const data=[
  {
    id:1,
    image: MLproj,
    title: "ML Projects",
    Github: 'https://github.com/CharanSriKrishna/Projects-Machine-Learning',
    demo : 'https://drive.google.com/drive/folders/18DGZSnm2G0DCbs9mnroXHFd2wwKESVSJ?usp=sharing'
  },
  {
    id:2,
    image: Project,
    title: "Projects",
    Github: 'https://github.com/CharanSriKrishna/Projects-Other-Projects',
    demo : 'https://drive.google.com/drive/folders/1kOWnhZZpnaMvo-wnWk6ReMCUapVlQcLa?usp=share_link'
  },
  {
    id:3,
    image: Art,
    title: "Art Work",
    Github: 'https://charansri8.artstation.com/',
    demo : 'https://charansri8.artstation.com/'
  },
  
]
{/*}
{
    id:4,
    image: Gameproj,
    title: "Game Project",
    Github: 'https://github.com/CharanSriKrishna/Projects-Game-Projects',
    demo : 'https://drive.google.com/drive/folders/1nvT8CB46Lze1B7MdkZRVWZ6IDVQzd0uW?usp=share_link'
  },*/}
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

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