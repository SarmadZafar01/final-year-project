import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './adminsidebar';
import Adminsearchbar from '../admin/adminsearchbar';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { ImagetoBase64 } from '../../utliity/imagetonase64';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product/${id}`);

        if (response.ok) {
          const productData = await response.json();
          setData(productData);
        } else {
          toast.error('Failed to fetch product data');
        }
      } catch (error) {
        console.error(error);
        toast.error('An error occurred while fetching product data');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const uploadImage = async (e) => {
    const imageData = await ImagetoBase64(e.target.files[0]);

    setData((prevData) => ({
      ...prevData,
      image: imageData
    }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/updateproduct/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (fetchData.ok) {
        const fetchRes = await fetchData.json();
        toast.success(fetchRes.message);
        navigate('/AdminProduct'); // Redirect to product list after successful update
      } else {
        toast.error('Failed to update product');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while updating the product');
    }
  };

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or component
  }

  return (
    <div>
      <Sidebar />
      <Adminsearchbar />
      <div className="NewProduct">Update Product</div>
      <div className="Card">
        <form onSubmit={handleUpdateSubmit}>
          <label className="P112">Name</label>
          <input type="text" placeholder="Type here" name="name" onChange={handleOnChange} value={data.name} />

          <div className="Pricess">
            <label className="p113">Prices</label>
            <input type="text" placeholder="Type here" name="price" onChange={handleOnChange} value={data.price} />
          </div>

          <label className="p117">Category</label>
          <select className="P115" name="category" onChange={handleOnChange} value={data.category}>
            <option value="other">Select Category</option>
            <option value="Breaks">Breaks</option>
            <option value="Engine">Engine</option>
            <option value="Exterior">Exterior</option>
            <option value="Light & Electronic">Electronic</option>
          </select>

          <div className="describe">
            <label className="p114">Description</label>
            <input type="text" placeholder="Type Here" name="description" onChange={handleOnChange} value={data.description} />
          </div>

          <div className="Look">
            <label className="image" htmlFor="image">
              Image
              <div className="UMPER">
                {data.image ? <img src={data.image} alt="" /> : <span className="ICONN"><FaCloudUploadAlt /></span>}
                <input type="file" id="image" onChange={uploadImage} accept="image/*" />
              </div>
            </label>
          </div>

          <div className="B110">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
