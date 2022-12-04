import React from 'react'
import './Contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contacts = () => {
  const form  =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o6pflt7', 'template_nqjhgmi', form.current, '4P5ipr51zGxL5sx-X')
    e.target.reset()  
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>ContactMe</h2>
      <div className=" container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>Charansri795@gmail.com</h5>
              <a href="mailto:Charansri795@gmail.com" target="_blank">Send a message</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+91 70941 61716</h5>
              <a href="https://wa.me/+917094161716"  target="_blank">Send a message</a>
            </article>

            <article className="contact__option">
              <AiOutlineInstagram className='contact__option-icon'/>
              <h4>Instagram</h4>
              <h5>Charan_.sri_</h5>
              <a href=" https://ig.me/m/charan_.sri_"  target="_blank">Send a message</a>
            </article>

        </div>
        {/*END OF CONTACT option*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name ' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='bts'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts
