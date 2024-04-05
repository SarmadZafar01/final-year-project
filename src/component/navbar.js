// NavBar.js
import React from 'react';
import imageSrc from "./logo.png"; 
import "./INFO/img.css";
import "./navbar.css";

import ImageWithText from './INFO/img';
import SelectButton from './INFO/button';
import { Link } from 'react-router-dom';
import "../component/userbackground.css";



 function NavBar() {
  return (
    <nav>
    <div className='p1'>
      <img src={imageSrc} alt="Car" />
      </div>
      <div className="navbar-title"><Link to="">Quantum Car Bits</Link></div>
  
      <div>
      <ul className="navbar-links">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/modification">Modification</Link></li>
        <li><Link to="/image-recognition">Image Recognition</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <button><Link to="/signup">Signup</Link></button>
        </ul>
        </div>
        
        <ImageWithText />
        <SelectButton />
        
        
    </nav>
  );
}

export default NavBar;





