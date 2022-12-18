import React from 'react'
import { motion } from 'framer-motion';
import CV from '../../assests/Resume.pdf'
const cta = () => {
  return (
    <div className='cta'>
        <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 ,duration: 3 }}>
            <a href={CV} download className='btn'>Resume</a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <a href="#contacts" className='btn btn-primary'>let's talk</a>
        </motion.div>
    </div>
  )
}

export default cta