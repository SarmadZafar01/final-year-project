// Section.js
import React, { useState } from 'react';
import "./section.css";
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const Section = () => {
  const userData = useSelector((state) => state.user);
  const [dob, setDOB] = useState('');

  const handleUpdate = () => {
 
    console.log("Updated DOB:", dob);
    toast.success('updated successfully!');
  };

  return (
    <div className="Main">
      <div className="f1">
        <form className="infoo">
          <label>E-Mail</label>
          <input type="email" placeholder="Zohaibtariq@gmail.com" value={userData.user.Email || ''} readOnly />
          <label>Name</label>
          <input
            type="Text"
            placeholder="Zohaib Tariq"
            value={userData.user.FullName || ''}
            readOnly
          />
          <label>DOB</label>
          <input
            type="Text"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            placeholder="Enter your Date of Birth"
          />
          <label>Join Date</label>
          <input type="Password" placeholder='29/6/24'  disabled/>
          <div className="B20">
            <button type="button" onClick={handleUpdate}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Section;
