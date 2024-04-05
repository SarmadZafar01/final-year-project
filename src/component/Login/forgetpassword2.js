// Modify the existing component in your React file

import React, { useState } from "react";
import NavBar from '../nav';
import ImageWithText from '../mg';
import "../mg.css";
import "./forgetpassword2.css";
import { toast } from "react-hot-toast";

function NewForgot() {
  const [data, setData] = useState({
    
    newPassword: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePasswordChange = async () => {
    const { newPassword, confirmPassword } = data;

    if (newPassword !== confirmPassword) {
      toast("Passwords do not match");
      return;
    }

    const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/changepassword`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newPassword, confirmPassword }),
    });

    const dataRes = await fetchData.json();
    toast(dataRes.message);
  };

  return (
    <div>
      <NavBar />
      <ImageWithText />
      <div className="Forgotpassword2">
        <h2>Enter New Password</h2>
        <form>
          <label className="l2">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={data.newPassword}
            onChange={handleOnChange}
            required
          />
          <br />

          <label>Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleOnChange}
            required
          />
          <br />

          <div className="changepassword">
            <button type="button" onClick={handlePasswordChange}>
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewForgot;
