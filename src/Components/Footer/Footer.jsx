import React from 'react'
import './Footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {RiLinkedinFill} from 'react-icons/ri'
import {SiArtstation} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'
import {FaKaggle} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Charan</a>
      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#work'>Services</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contacts'>Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/charan-sri-krishna/' target='_blank'><RiLinkedinFill/></a>
        <a href='https://github.com/CharanSriKrishna/' target='_blank'><BsGithub/></a>
        <a href='https://leetcode.com/charansri795/' target='_blank'><SiLeetcode/></a>
        <a href='https://www.kaggle.com/charansri795' target='_blank'><FaKaggle/></a>
        <a href='https://charansri8.artstation.com/' target='_blank'><SiArtstation/></a>
        <a href='https://www.instagram.com/charan_.sri_/' target='_blank'><AiOutlineInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Charan Sri Krishna. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer