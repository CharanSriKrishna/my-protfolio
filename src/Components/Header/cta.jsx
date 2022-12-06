import React from 'react'
import CV from '../../assests/Resume.pdf'
const cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Resume</a>
        <a href="#contacts" className='btn btn-primary'>let's talk</a>
    </div>
  )
}

export default cta