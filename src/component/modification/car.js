import React from 'react';
import car1 from "../car1.png";
import car2 from "./honda city.png"
import car3 from "./toyo.png"

import "./car.css";

import { Link } from 'react-router-dom';

function SelectCar() {
  return (
    <div>
    <Link to="/toyota">
      <div className="car">
        <img src={car3} alt="car1"></img>
       

      </div>
      </Link>

      <Link to="/modify">
      <div className="car1">
        <img src={car2} alt="car1"></img>
       

      </div>
      </Link>


      <Link to="/civic">
      <div className="car2">
        <img src={car1} alt="car1"></img>
       

      </div>
      </Link>

     
    </div>
  );
}

export default SelectCar;
