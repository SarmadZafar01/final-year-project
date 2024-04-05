import React, { useState } from 'react'
import logo  from "../logo.png"
import "../admin/adminsignup.css";
import Capture from "../admin/Capture-removebg-preview.png"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import "../admin/adminsidebar.css";
import { useDispatch, useSelector } from 'react-redux';
import { loginRedux } from '../../redux/userSlice';



function Adminsignup() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    Email: "",
    password: "",
  });

  console.log(data);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const userData= useSelector(state =>state)
  console.log(userData.user)

  const dispatch= useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { Email, password } = data;
    if (Email && password) {
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data) , // Send an object with properties Name and password
        });
  
        const dataRes = await fetchData.json();
        console.log(dataRes);
        toast(dataRes.message);


        if(dataRes.alert)
      {
        dispatch(loginRedux(dataRes))
        navigate("/Dashbord");
      }
    }
    else{
      alert("please enter require field")
    }
  };

  



  return (
    <div className="Admintitle">
    <div className="topTitle">Quantum Car Bits
    </div>
    <div className="topimg">
    <img src={logo} alt="logo"></img>
    </div>
     
     <div className="MainHeading">
      <img src={Capture} alt="logo"></img>
    </div>

    <div className="topHeading">
      <h2>Welcome Back!</h2>
    </div>

    <div className="Addinfo">
      <form onSubmit={handleSubmit}>
      
        <input type="text" placeholder="Enter username" id="Name" name="Email" value={data.Email} onChange={handleOnChange}></input>
        <input type="password" placeholder="Enter Password" id="password" name="password" value={data.password}  onChange={handleOnChange}></input>
     
      <button type="submit">Login</button>
      </form>
    </div>

    <div className="copyright">
      copyright@2023
    </div>

    </div>
  )
}

export default Adminsignup
