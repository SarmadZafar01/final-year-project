import React, { useRef, useState, useEffect } from 'react';
import "./profile.css";
import NavBar from '../navb';
import Section from './section';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRedux } from '../../redux/userSlice';
import toast from 'react-hot-toast';


function Pro() {
  const dispatch=useDispatch()
  const navigate = useNavigate();

  const userData= useSelector((state) =>state.user)
  console.log(userData.user)

  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(() => {
    // Initialize with the value from localStorage or default to null
    return localStorage.getItem('selectedImage') || null;
  });

  useEffect(() => {

    

    // Save the selectedImage to localStorage whenever it changes
    localStorage.setItem('selectedImage', selectedImage);
  }, [selectedImage]);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Handle the selected file (you can upload it or process it as needed)
    // For now, let's update the state to display the selected image
    setSelectedImage(URL.createObjectURL(selectedFile));
  };


  const handleLogout =()=>{
dispatch(logoutRedux())
toast("Logout successfully")
navigate('/');
  }

  

 /* const logout = () => {
    console.warn("logout");
    setSelectedImage(null); // Clear the selectedImage state
    navigate('/');
  }*/

  return (
    <div>
      <NavBar />
      
      <div className="Side">
        <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />

        <div className="pic" onClick={handleImageClick}>
          {selectedImage ? (
            <img src={selectedImage} alt="profile" />
          ) : (
            <p>Zohaib Tariq</p>
          )}
        </div>

        <div className="Date">
          <p>Join date: 28 Oct 2023</p>
        </div>

        <div className="PRONAME">{userData.user.FullName}</div>
        <div className="b10">
          <button onClick={handleLogout}>Log Out</button>
        </div>
        <div className="newbar">
          <div>
            <ul className="newbar-links">
              <li><Link to="/Profile">Profile</Link></li>
              <li><Link to="/muorder">My Order</Link></li>
              <li><Link to="/trackorder">Track Order</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/car">My Car Modification</Link></li>
              <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
          </div>
          <Section />
        </div>
      </div>
    </div>
  );
}

export default Pro;
