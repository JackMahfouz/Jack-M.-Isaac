import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import { FaBrain } from 'react-icons/fa';
import {FaBars ,FaTimes} from 'react-icons/fa';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
         <div className="navbar">
            <div className="navbar-container container">
              <NavLink to='/' className="navbar-logo" >
              <FaBrain className="navbar-icon"></FaBrain>
                  Jack M. Isaac
              </NavLink>
              <div className="menu-icon" onClick={handleClick}>
                {!click ? <FaBars/>:<FaTimes/>}
              </div> 
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink to='Jack-M.-Isaac/' className="nav-links" onClick={closeMobileMenu}>About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='Jack-M.-Isaac/contact' className="nav-links" onClick={closeMobileMenu}>Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='Jack-M.-Isaac/dreams' className="nav-links" onClick={closeMobileMenu}>Dreams</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='Jack-M.-Isaac/projects' className="nav-links" onClick={closeMobileMenu}>Projects</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='Jack-M.-Isaac/skills' className="nav-links" onClick={closeMobileMenu}>Skills</NavLink>
                </li>
              </ul>
            </div>    
         </div>  
        </>
    );
};

export default NavBar;