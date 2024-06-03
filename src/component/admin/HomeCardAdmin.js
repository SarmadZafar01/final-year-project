import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const HomecardAdmin = ({ id, name, image, category, price, description, onDelete }) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
  navigate(`/update/${id}`, { 
    state: { 
      id, 
      name: name || "", 
      image: image || "", 
      category: category || "", 
      price: price || "", 
      description: description || "" 
    } 
  });
};

  const handleDelete = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/delete/${id}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Product updated successfully");
        onDelete(id);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error deleting product");
    }
  };

  return (
    <div className="product-box2">
      <img src={image} alt={name} className="product-image2" />
      <div className="product-details2">
        <div className="product-name2">{name}</div>
        <div className="product-price2">Rs {price}</div>
        <div className="product-buttons2">
          <button className="add-to-cart-button2" onClick={handleUpdate}>Update</button>
          <button className="view-now-button2" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default HomecardAdmin;
