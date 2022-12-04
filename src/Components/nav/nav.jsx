import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {BiBookOpen} from 'react-icons/bi'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]=useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active':''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}><AiOutlineUser/></a>
      <a href='#work' onClick={()=>setActiveNav('#work')} className={activeNav==='#work' ? 'active':''}><MdWorkOutline/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><BiBookOpen/></a>
      <a href='#contacts' onClick={()=>setActiveNav('#contacts')} className={activeNav==='#contacts' ? 'active':''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav