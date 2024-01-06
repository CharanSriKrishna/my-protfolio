import React, { useState } from 'react';
import './services.css';
import { BsCheck } from 'react-icons/bs';
import {service_data} from "./data"

const Service = ({ index, title, details, activeIndex, setActiveIndex }) => {
  const handleFlip = () => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <article
      className={`service ${index === activeIndex ? 'flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className="service__face service__face--front">
        <div className="service__head">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="service__face service__face--back">
        <ul className='service__list'>
          {details.map((detail, idx) => (
            <li key={idx}>
              <BsCheck className='service__list-icon' />
              <p>{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section id='work'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {service_data.map((service, index) => (
          <Service
            key={index}
            index={index}
            {...service}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
