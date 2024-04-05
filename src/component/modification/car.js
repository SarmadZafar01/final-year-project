import React from 'react';
import car1 from "../car1.png";
import car2 from "../car2.png";
import car3 from "../car3.png";
import car4 from "../car4.png";
import car5 from "../car5.png";
import "./car.css";

import { Link } from 'react-router-dom';

function SelectCar() {
  return (
    <div className="car"> 
      <img src={car1} alt="car1"></img>
      <img src={car2} alt="car1"></img>
      <img src={car3} alt="car1"></img>
      <img src={car4} alt="car1"></img>
      <img src={car5} alt="car1"></img>
      <div className="b1">
        <button><Link to="/Select">Select</Link></button>
        <button>Select</button>
        <button>Select</button>
        <button>Select</button>
        <button>Select</button>
      </div>
    </div>
  );
}

export default SelectCar;
