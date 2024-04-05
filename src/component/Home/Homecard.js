// Homecard.js
import React from 'react';
import "./HomeCard.css";
import { Link, useNavigate } from 'react-router-dom';
import { addCartItem } from '../../redux/productSlice';
import { useDispatch } from 'react-redux';

const Homecard = ({ id, name, image, category, price }) => {
  const navigate = useNavigate();

  const handleViewNowClick = () => {
    // Additional logic you want to perform when the button is clicked
   // console.log(`View button clicked for product ID ${id}`);

    // Navigate to the product detail page
    navigate(`/View/${id}`);

  };

  const dispatch = useDispatch()
  const handleAddCartProduct = (e) =>{
    dispatch(addCartItem({
      _id:id,
      name:name,
      price:price,
      image:image
    }))
  }



  

  return (
    <div className="product-box">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <div className="product-name">{name}</div>
        <div className="product-price">Rs {price}</div>
        <div className="product-buttons">
          <button className="add-to-cart-button" onClick={handleAddCartProduct}>Add to Cart</button>
          <button className="view-now-button" onClick={handleViewNowClick}>
            View Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homecard;
