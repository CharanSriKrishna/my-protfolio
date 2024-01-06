import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/nav/nav'
import About from './Components/Abouts/About'
import Services from './Components/Services/services'
import Experience from './Components/Experience/Experience'
import Skills from './Components/Skills/Skills'
import Portfolios from './Components/portfolio/portfolio'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'
import Certificates from './Components/Certificates/Certificates'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Portfolios />
        <Certificates />
        <Contacts />
        <Footer />
        
    </>
  )
}

export default App
