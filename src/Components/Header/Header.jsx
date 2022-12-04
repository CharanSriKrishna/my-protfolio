import React from 'react'
import './Header.css'
import CTA from './cta'
import ME from '../../assests/charan1.jpg'
import HeaderSocials from './headersocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello  I'm</h5>
        <h1>Charan Sri Krishna</h1>
        <h5 className="text-ligth">Computer Science Engineer</h5>
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