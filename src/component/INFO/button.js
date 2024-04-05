import React from 'react';
import "../INFO/button.css"; // Import the external CSS file
import { Link } from 'react-router-dom';

function SelectButton() {
  return (
    <div className="More"> 
      <button><Link to="aboutus">Learn More</Link></button>
    </div>
  );
}

export default SelectButton;
