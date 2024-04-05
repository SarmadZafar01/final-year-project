import React from 'react';
import image from "../civik.png"; // Import your image file
import "./img.css";

function ImageWithText() {
  return (
    <div className='p2'>
      <img src={image} alt="Car" />
      <p>Elevate your <span>shopping<br></br> experience</span> with our<br></br> one-stop car spare parts website..</p>
      <div className="Text">
      Elevate your car customization with advanced 3D modeling and<br></br> Explore endless possibilities in just a few clicks
    </div>
    </div>
    
  );
}

export default ImageWithText;
