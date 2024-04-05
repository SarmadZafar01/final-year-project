import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook to access URL parameters

import "./track.css";

function Track() {
  // Use useLocation hook to access URL parameters
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Extract address details from URL parameters
  const receiverName = searchParams.get('name') || sessionStorage.getItem('receiverName') || "Receiver Name";
  const phoneNumber = searchParams.get('phone') || sessionStorage.getItem('phoneNumber') || "Phone Number";
  const address = searchParams.get('address') || sessionStorage.getItem('address') || "Address";

  useEffect(() => {
    // Store address details in session storage
    sessionStorage.setItem('receiverName', receiverName);
    sessionStorage.setItem('phoneNumber', phoneNumber);
    sessionStorage.setItem('address', address);
  }, [receiverName, phoneNumber, address]);

  return (
    <div className="TrackOrder">
      <div className="deliver">
        Receiver: <p>{receiverName}</p>
      </div>

      <div className="pho">
       Phone:<p>{phoneNumber}</p>
      </div>

      <div className="add">
        Address: <p>{address}</p>
      </div>

      <div className="Pre">
        Package Is being Prepared: <p>Your Package is Being prepared By Seller</p>
      </div>
      
      <div className="war">
        Reached Our Warehouse: 
        <p>Your package has Arrived At Our Warehouse<br />
        from Where It will be Sent to your location soon (08:14) [2 April 24]</p>
      </div>

      <div className="shi">
        Shipped Detail: <p>Your package Has been shipped</p>
      </div>

      <div className="dev">
        Deliver At Your Pick Up Point: <p>Your package Has been delivered<br />
        at your pick up point (18:04) [8 April 24] </p>
      </div>
    </div>
  );
}

export default Track;
