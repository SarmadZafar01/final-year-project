import React from 'react';
import NavBar from '../nav';
import ImageWithText from '../mg';
import '../navbar.css';
import '../mg.css';
import './signup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"

function Signup() {

  const navigate= useNavigate()

  const [data, setData] = useState({
    FullName: "",
    Email: "",
    password: "",

  });

  console.log(data)

  const handleOnChange =(e) =>{
    const {name,value} = e.target
    setData((preve)=>{
      return {...preve,
        [name]: value};
    })
  }

console.log(process.env.REACT_APP_SERVER_DOMIN)

  const handleSubmit = async (e)=>{
    e.preventDefault();

    const{FullName, Email,password}=data
    if(FullName && Email && password){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
        method: "POST",
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(data)
      })

      const dataRes = await fetchData.json()
      console.log(dataRes)
      //alert(dataRes.message)
      toast(dataRes.message)
      if(dataRes.alert){
        navigate('/login')
      }
      
    }
   

  }

  return (
    <div>
      <NavBar />
      <ImageWithText />
      <div className="signupage">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" id="FullName" name="FullName" value={data.FullName} onChange={handleOnChange } required />
          <br />
          <label>E-mail</label>
          <input type="email" id="Email" name="Email" value={data.Email} onChange={handleOnChange} required />
          <label>Password:</label>
          <input type="password" id="password" name="password" value={data.password} onChange={handleOnChange} required />
          <br />
          <div className="changepassword"></div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
