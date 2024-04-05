// NavBar.js
import React from 'react';
import NavBar from '../navb';
import "./modfication.css";
import standing from "../Capture.PNG";
import SelectCar from './car';




 function Modification() {
  return (
   <div>
   <NavBar />
   <div className="platform">
   <img src={standing} alt="platform"></img>
   <div className="circle1"></div>
   <div className="circle2"></div>
   <div className="circle3"></div>
   <div className="circle4"></div>
   <div className="circle5"></div>
   </div>
   <SelectCar />
   </div>
  );
}

export default Modification;

