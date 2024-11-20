import React, {useState} from 'react'
import logo from '../static/img/logo.png'
import '../'



export const NavigationBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  return (
    <nav className='mynavbar'>
      <div className='navbar-logo-container'>
      
        <img  
          src={logo}
          className='navbar-logo'
        />
        <p className='mynavbar-name'>Jozel Surro</p>
      </div>

      {/* Hamburger */}
      <div className='hamburger-menu' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div onClick={toggleMenu} className={`navbar-options-container ${isMenuOpen ? 'show' : ''}`}>
        <li className='nav-list'>
          <a href='#home'className='mynav-link'>Home</a>
        </li>
        <li className='nav-list'>
          <a href='#skills'className='mynav-link'>Skills</a>
        </li>
        <li className='nav-list'>
          <a href='#project'className='mynav-link'>Projects</a>
          <ul className='dropdown'>
            <li><a className='dropdown-list' href='#Brighsity'>Brighsity Mobile App</a></li>
            <li><a className='dropdown-list' href='#SchoolReg'>School Registration System</a></li>
            <li><a className='dropdown-list' href='#FinApp'>Financial Budget Mobile App</a></li>
            <li><a className='dropdown-list' href='#SpotifyApp'>Spotify Web Application</a></li>
            <li><a className='dropdown-list' href='#Co-working'>Co-working Registry Website</a></li>
          </ul>
        </li>       
        <li className='nav-list'>
          <a href='#contacts'className='mynav-link'>Message Me!</a>
        </li>
      </div>
    </nav>


  )
}
