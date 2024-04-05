// NavBar.js
import React from 'react';
import NavBar from '../navb';

import './view.css';


import StarRating from '../satr';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../redux/productSlice';

function View() {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);
  const dispatch = useDispatch()

  // Check if productDisplay is defined before accessing its properties
  const productDisplay = productData.find((el) => el._id === filterby);
  console.log(productDisplay);

  // Only render the component if productDisplay is defined
  if (!productDisplay) {
    return <div>Loading...</div>; // You can replace this with your loading logic
  }

 
  const handleAddCartProduct = (e) =>{
    dispatch(addCartItem(productDisplay))
  }
  

  return (
    <div>
      <NavBar />
      <div className="view">
        <img src={productDisplay.image} alt={productDisplay.name} />
      </div>
      <div className="detail">
        <div className="Na">
          Name
          <p>{productDisplay.name}</p>
        </div>
        <div className="pa">
          Price
          <p>{productDisplay.price}</p>
        </div>
        <div className="pI">
          Product Information:
          <p>
            {productDisplay.description}
          </p>
        </div>
        <div className="B30">
          <button onClick={handleAddCartProduct} >Add To Cart</button>
        </div>
        <div className="STR">
        <StarRating />
        </div>
       
      
      
      </div>
    </div>
  );
}

export default View;
