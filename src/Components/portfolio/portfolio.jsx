import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import './portfolio.css'
import items from './items'



const Portfolio = () => {
  const [works, setWorks] = useState(items);
  const [filterWork, setFilterWork] = useState(items);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.cat.includes(item)));
      }
    }, 500);
  };

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="app__work-filter">
        {['All','Artificial Intelligence', 'Art Work', 'Game Project', 'Software Project'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}>
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map(({id,image,title,Github,btn_name}) => (
            <div className="app__work-item app__flex" key={id}>
                <div className="app__work-img app__flex">
                    <img src={image} alt={title} />
                </div>

                <div className="app__work-content app__flex">
                    <h4 className="bold-text">{title}</h4>
                    <div className="protfolio__item-cta">
                        <a className="btn2" href={Github} target='_blank'>{btn_name}</a>
                    </div>
                </div>
              </div>
          ))}
      </motion.div>
    </section>
)
}
export default Portfolio