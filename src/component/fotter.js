// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2023 Quantum Car Bits</p>

      <div className="p9"> Connect with us</div>
      <div className="Connect">
        <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.instagram.com/quantum_car_bits?igsh=YmlxczV6MWF5NGtm" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.youtube.com/channel/UCa--NpT65swFStDy48vicKw" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>

      <div className="p10">Contact Us</div>
      <div className="info">
        03881297391<br></br>
        03415631298<br></br>
        info@gmail.com<br></br>
      </div>

      <div className="p11">Help</div>
      <div className="info2">
        Help Center<br></br>
        Community Guideline<br></br>
      How To Buy<br></br>
      </div>

      <div className="p12">My Account</div>
      <div className="info3">
       Sign in<br></br>
       View Cart<br></br>
      Track My Order<br></br>
      </div>
    </footer>
  );
}

export default Footer;
