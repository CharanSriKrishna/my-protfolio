import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/nav/nav'
import About from './Components/Abouts/About'
import Services from './Components/Services/services'
import Experience from './Components/Experience/Experience'
import Portfolios from './Components/portfolio/portfolio'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'
import Testimonials from './Components/testimonial/testimonial'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Services />
        <Experience />
        <Portfolios />
        {/*<Testimonials />*/}
        <Contacts />
        <Footer />
        
    </>
  )
}

export default App