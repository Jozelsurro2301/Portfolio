import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarBrand from 'react-bootstrap/Navbar';
import logo from '../static/img/logo.png'
import '../'



export const NavigationBar = () => {
  return (
    <nav className='mynavbar'>
      <div className='navbar-logo-container'>
      
        <img  
          src={logo}
          className='navbar-logo'
        />
        <p className='mynavbar-name'>Jozel Surro</p>
        
      </div>

      <div className='navbar-options-container'>
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


  //  <Navbar expand="lg" className='navbar'>
  //   <Container className='nav-container'>
  //       <NavbarBrand href='#home' id='nav-brand'>
  //         <img
  //           src={logo}
  //           alt='logo'
  //           width={50}
  //           height={50}
  //           className='d-inline-block align-top'
  //         />{''}
  //         <p id='nav-brand-name'>Jozel Surro</p>
  //       </NavbarBrand>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="ms-auto nav-sections">
  //               <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
  //               <Nav.Link href="#skills" className='nav-link'>Skills</Nav.Link>
  //               <NavDropdown title="Projects" id="projects-dropdown">
  //                   <NavDropdown.Item href="#cafe" className='nav-projects-link'>Cafe by the River</NavDropdown.Item>
  //                   <NavDropdown.Item href="#cafe" className='nav-projects-link'>Tech Shack</NavDropdown.Item>
  //               </NavDropdown>
  //           </Nav> 
  //       </Navbar.Collapse>
  //   </Container>
   //</Navbar>

  )
}
