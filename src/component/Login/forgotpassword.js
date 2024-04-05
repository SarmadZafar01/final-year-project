// Modify your Forgot.js file

import React, { useState } from "react";
import NavBar from '../nav';
import ImageWithText from '../mg';
import "../mg.css";
import "./forgotpassword.css";
import { toast } from "react-hot-toast";

function Forgot() {
  const [data, setData] = useState({
    Email: "",
    newPassword: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePasswordChange = async () => {
    const { Email, newPassword } = data;

    const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/changepassword`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ Email, newPassword }),
    });

    const dataRes = await fetchData.json();
    toast(dataRes.message);
  };

  return (
    <div>
      <NavBar />
      <ImageWithText />
      <div className="Forgotpassword">
        <h2>Forgot Password</h2>
        <form>
          <label className="l2">Enter User Email</label>
          <input
            type="Email"
            id="Email"
            name="Email"
            value={data.Email}
            onChange={handleOnChange}
            required
          />
          <br />

          <label>Enter New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={data.newPassword}
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

export default Forgot;
