import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'

import './navbar.css';
const Navbar = () => {
  return (
    <div className='gpt__navbar'>
      <div className='gpt__navbar-links'>
        <div className='gpt__navbar-links_logo'>
          <img src={logo} alt=''/>
        </div>
        <div className='gpt__navbar-links_container'>
          <p><a href="#Home">Home</a></p>
          <p><a href="#wgpt">What is GPT ? </a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
