// NavBar.js
import React, { useState } from 'react';
import imageSrc from "./logo.png"; 

import "./INFO/img.css";

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/productSlice';

const NavBar = () => {

   
  const cartItemNumber = useSelector((state)=>state.product.cartItem)

  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
    dispatch(setSearchTerm(searchTerm));
  };
  return (
    <nav>
      <div className='p1'>
        <img src={imageSrc} alt="Car" />
      </div>
      <div className="navbar-title">
        <Link to="/">Quantum Car Bits</Link>
      </div>
  
      <div>
        <ul className="navbar-links">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/modification">Modification</Link></li>
          <li><Link to="/image-recognition">Image Recognition</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/profile">Profile {cartItemNumber.length > 0 && <span>
          ({cartItemNumber.length})</span>}</Link></li>

  
        </ul>
      </div>

      {/* Add the search bar here */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleSearchChange}
        />
        

        
       
    
      </div>
    </nav>
  );
}

export default NavBar;
