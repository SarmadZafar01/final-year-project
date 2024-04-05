import React from 'react';
import "./hero.css";
import i from "../civik.png";



function Hero() {
  return (
    <div className="Hero">
    <img src={i} alt="Car" />
    <div className="Word">
        <p>Elevate your <span>shopping<br></br> experience</span> with our<br></br> one-stop car spare parts website..</p>
    </div>
    </div>
    
  );
}

export default Hero;
