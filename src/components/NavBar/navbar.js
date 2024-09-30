import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <Link to="intro" smooth={true} duration={500} offset={-50}className='desktopMenuListItem'>Home</Link>
        <Link to="about" smooth={true} duration={500} offset={-50} className='desktopMenuListItem'>About</Link>
        <Link to="experience" smooth={true} duration={500} offset={-70}className='desktopMenuListItem'>Experience</Link>
        <Link to="skills" smooth={true} duration={500} offset={-20}className='desktopMenuListItem'>Skills</Link>
        <Link to="projects" smooth={true} duration={500} offset={-50}className='desktopMenuListItem'>Projects</Link>
      </div>
      <Link to="contact" smooth={true} duration={500} offset={-70}>
        <button className="desktopMenuBtn">
          <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
        </button>
      </Link>
    </nav>
  )
}

export default Navbar;