// Login.js
import React, { useState } from 'react';
import NavBar from '../nav';
import "../navbar.css";
import ImageWithText from '../mg';
import "../mg.css";
import "./login.css";
import { Link,useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux';
import { loginRedux } from '../../redux/userSlice';

function Login() {
  const navigate= useNavigate()
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
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`,{
        method: "POST",
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(data)
        
      })

      const dataRes = await fetchData.json()
      console.log(dataRes)
      toast(dataRes.message)
      if(dataRes.alert)
      {
        dispatch(loginRedux(dataRes))
      navigate("/Home");
      }
    }
    else{
      alert("please enter require field")
    }
  };

  
  return (
    <div>
      <NavBar />
      <ImageWithText />
      <div className="loginpage">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="l1">Email:</label>
          <input type="text" id="Email" name="Email" value={data.Email} onChange={handleOnChange} required />
          <br />
          <label className="l1">Password:</label>
          <input type="password" id="password" name="password" value={data.password} onChange={handleOnChange} required />
          <br />
          <div className="changepassword">
            <label>
              <Link to="/forgotpassword">Forgot Your Password</Link>
            </label>
          </div>
         
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
