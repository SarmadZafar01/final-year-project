import React from 'react';




const HomecardAdmin = ({ id, name, image, category, price }) => {
  
  

 
  

  return (
    <div className="product-box2">
      <img src={image} alt={name} className="product-image2" />
      <div className="product-details2">
        <div className="product-name2">{name}</div>
        <div className="product-price2">Rs {price}</div>
        <div className="product-buttons2">
        <button className="add-to-cart-button2" >Update</button>
        <button className="view-now-button2" >
          Delete
        </button>
      </div>
      </div>
    </div>
  );
};

export default HomecardAdmin;
