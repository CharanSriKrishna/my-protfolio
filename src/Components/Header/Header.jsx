
import React from 'react'
import './Header.css'
import CTA from './cta'
import ME from '../../assests/charan2.jpg'
import HeaderSocials from './headersocials'
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header>
      <div className="container header__container">    
        <motion.div
          whileInView={{ x: [-150, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}>
            <div>
                <h5>Hello  I'm</h5>
                <h1>Charan Sri Krishna</h1>
                <h5 className="text-ligth">Computer Science Engineer</h5>
            </div>   
        </motion.div>
        <CTA />

        <HeaderSocials/>
        

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header