// NavBar.js
import React from 'react';
import imageSrc from "../logo.png"; 

import "./livechatnav.css";


import { Link } from 'react-router-dom';
import "../userbackground.css";



 function Livechatnav() {
  return (
    <nav>
    <div className='p1'>
      <img src={imageSrc} alt="Car" />
      </div>
      <div className="navbar-title"><Link to="">Quantum Car Bits</Link></div>
  
      <div>
      <ul className="navbar-linksLive">
        <li>Live Chat Communication Page</li>
        
        
        </ul>
        </div>
        
       
        
        
    </nav>
  );
}

export default Livechatnav;





