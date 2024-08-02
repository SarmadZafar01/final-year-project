import React, { useState, useEffect } from "react";
import NavBar from "../navb";
import "./home.css";
import Homecard from "./Homecard";
import "./HomeCard.css";
import "./view.css";

import StarRating from "../satr";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productSlice, { addCartItem } from "../../redux/productSlice";

function View() {
 
  
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();
  const [recommond, setRecommond] = useState([]);

  // Check if productDisplay is defined before accessing its properties
  const productDisplay = productData.find((el) => el._id === filterby);
  console.log(productDisplay);

  useEffect(() => {
    if (productDisplay) {
      fetchRecommendations(productDisplay);
    }
  }, [productDisplay]);

  const fetchRecommendations = async (product) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/recommendation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: product._id,
          image: product.image,
          name: product.name,
          description: product.description,
          price: product.price
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }

      const data = await response.json();
      setRecommond(data.recommendations); // Assuming the API returns an array of recommended products
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  // Only render the component if productDisplay is defined
  if (!productDisplay) {
    return <div>Loading...</div>; // You can replace this with your loading logic
  }

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay));
  };

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
          <p>{productDisplay.description}</p>
        </div>
        <div className="B30">
          <button onClick={handleAddCartProduct}>Add To Cart</button>
        </div>
        <div className="STR">
          <StarRating />
        </div>
        
      </div>
      
      <section className="contain">
      <hr className="txt"></hr>
        <h1>Recommendation</h1>
        <div className="products-containerrr">
        {recommond?.map((el) => (
            <Homecard key={el._id} id={el._id} image={el.image} name={el.name} price={el.price} />
          ))}</div>
      </section>
    </div>
  );
}

export default View;

