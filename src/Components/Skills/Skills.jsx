import React from 'react';
import './Skills.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import {tech_Data} from "./data"
import {other_Data} from "./data"
import {soft_Data} from "./data"

const SkillItem = ({ title, proficiency }) => (
  <article className='experience__details'>
    <AiOutlineCheckCircle className='experience__details-icon' />
    <div>
      <h4>{title}</h4>
      <small className='text-light'>{proficiency}</small>
    </div>
  </article>
);

const SkillCategory = ({ title, skills }) => (
  <div className='experience__category'>
    <h3>{title}</h3>
    <div className='experience__content'>
      {skills.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className='container experience__container'>
        <SkillCategory title='Technical Skills' skills={tech_Data} />
        <SkillCategory title='Other Skills' skills={other_Data} />
        <SkillCategory title='Soft Skills' skills={soft_Data} />
      </div>
    </section>
  );
};

export default Skills;
