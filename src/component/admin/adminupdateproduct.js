import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ImagetoBase64 } from '../../utliity/imagetonase64';
import "../admin/Adminproduct.css";
import "../admin/addproduct.css";
import { FaCloudUploadAlt } from 'react-icons/fa'; // Ensure you have this import
import Adminsiderbar3 from '../admin/adminsidebad3';
import Adminsearchbar from '../admin/adminsearchbar'

const UpdateProduct = ({ onUpdate }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, image, category, price, description } = location.state;

  const [data, setData] = useState({
    name: name || "",
    price: price || "",
    category: category || "",
    description: description || "",
    image: image || ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = async (e) => {
    const imageData = await ImagetoBase64(e.target.files[0]);
    setData((prevData) => ({
      ...prevData,
      image: imageData
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    if (response.ok) {
      toast.success("Product updated successfully");
      // Pass the updated product data back to the parent component
      navigate('/AdminProduct'); // Redirect to the products list after updating
    } else {
      toast.error(result.error);
    }
  } catch (error) {
    console.error("Error updating product:", error);
    toast.error("Error updating product");
  }
};

  

  return (
    <div>
    <Adminsiderbar3 />
      <Adminsearchbar />
      <div className="NewProduct">Add Product</div>
      <div className="Card">
        <form onSubmit={handleSubmit}>
          <label className="P112">Name</label>
          <input 
            type="text" 
            placeholder="Type here" 
            name="name" 
            onChange={handleOnChange} 
            value={data.name}
          />

          <div className="Pricess">
            <label className="p113">Prices</label>
            <input 
              type="text" 
              placeholder="Type here" 
              name="price" 
              onChange={handleOnChange} 
              value={data.price}
            />
          </div>

          <label className="p117">Category</label>
          <select 
            className="P115" 
            name="category" 
            onChange={handleOnChange} 
            value={data.category}
          >
            <option value={"other"}>Select Category</option>
            <option value="Gear stick">Gear stick</option>
            <option value="Dashbord">Dashbord</option>
            <option value="Air intake">Air intake</option>
            <option value="Fog light">Fog light</option>
            <option value="Headlight">Headlight</option>
            <option value="Tail light">Tail light</option>
            <option value="Console">Console</option>
            <option value="Steering Wheel">Steering Wheel</option>
          </select>

          <div className="describe">
            <label className="p114">Description</label>
            <input 
              type="text" 
              placeholder="Type Here" 
              name="description" 
              onChange={handleOnChange} 
              value={data.description}
            />
          </div>

          <div className="Look">
            <label className="image" htmlFor="image">Image
              <div className="UMPER">
                {
                  data.image ? 
                    <img src={data.image} alt="Product" /> : 
                    <span className="ICONN"><FaCloudUploadAlt /></span>
                }
                <input 
                  type="file" 
                  id="image" 
                  onChange={handleImageChange} 
                  accept="image/*"
                />
              </div>
            </label>
          </div>

          <div className="B110">
            <button type="submit">Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
