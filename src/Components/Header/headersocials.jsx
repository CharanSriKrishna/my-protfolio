import React from 'react'
import { motion } from 'framer-motion';
{/*import {RiLinkedinFill} from 'react-icons/ri'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'*/}

const  HeaderSocials= () => {
  return (

      <motion.div
        whileInView={{ y: [150, 0]}}
        transition={{ duration: 3 }}
        className='header__socials'>
        <a href="https://www.linkedin.com/in/charan-sri-krishna/" target="_blank">Linkedin</a>
        <a href="https://leetcode.com/charansri795/" target="_blank">Leetcode</a>
        <a href="https://github.com/CharanSriKrishna" target="_blank">Github</a>
        <a href="https://charansri8.artstation.com/" target="_blank">ArtStation</a>
        <a href='https://www.kaggle.com/charansri795' target="_blank">Kaggle</a>
      </motion.div>

  )
}

export default HeaderSocials
