import React from 'react';
import './Experience.css'; // Don't forget to create your own CSS file
import CompanyLogo from '../../assests/logo.png'
import { BsCheck } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Work Experience</h5>
      <h2>Experience</h2>
      <div className="timeline">
        <div className="event">
          <div className="date">
            <div>JUL 2023 </div>
            <div>|</div>
            <div>DEC 2023</div>
          </div>
          <div className="content">
            <div className="company">
              <img src={CompanyLogo} alt="Company Logo" />
              <h2>Autodesk</h2>
            </div>
            <h3>Technical Sales Specialist Intern</h3>
            <p>Mumbai</p>
          </div>
          <div className="work-details">
            <div className='points'>
              <BsCheck className='icon' />
              <h4>Engaged extensively with a diverse clientele, adeptly understanding their unique needs and challenges.</h4>
            </div>
            <div className='points'>
              <BsCheck className='icon' />
              <p>Collaborated closely with customers, delivering customized Python Scripts and integrations for Autodesk ShotGrid with tools like Maya, Silhouette via their APIs, ensuring seamless workflows, enhancing product functionality.</p>
            </div>
            <div className='points'>
              <BsCheck className='icon' />
              <p>Delivered impactful presentations, showcasing expertise and effectively communicating the value proposition of Autodesk Media & Entertainment solutions.</p>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
};

export default Experience;
