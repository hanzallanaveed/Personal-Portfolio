import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/burgerMenu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <Link to="intro" smooth={true} duration={500} offset={-300}className='desktopMenuListItem'>Home</Link>
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

      <img src={menu} alt="MobMenu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link to="intro" smooth={true} duration={500} offset={-300}className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link to="about" smooth={true} duration={500} offset={-50} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
        <Link to="experience" smooth={true} duration={500} offset={-70}className='listItem' onClick={()=>setShowMenu(false)}>Experience</Link>
        <Link to="skills" smooth={true} duration={500} offset={-20}className='listItem' onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link to="projects" smooth={true} duration={500} offset={-50}className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link to="contact" smooth={true} duration={500} offset={-50}className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;