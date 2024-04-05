import React from 'react'

import { Link } from 'react-router-dom';
import "../admin/adminsidebar3.css";
import { FaHome } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { IoChatboxEllipsesSharp } from "react-icons/io5"

const Adminsiderbar3 =() => {
  return (
    <div>
    <div className="sidebar">
    <div className="sidebar-title"><Link to="/Dashbord">Admin</Link></div>
    <ul className="sidebar-links">
        <li><Link to="/Dashbord">Dashbord</Link></li>
        <li><Link to="/AdminProduct">Product</Link></li>
        <li><Link to="/AddProduct">AddProduct</Link></li>
        <li><Link to="/Order">Order</Link></li>
        <li><Link to="/Livechat">Live Chat</Link></li>
        <li><Link to="/Admin">Logout</Link></li>
        </ul>
        <div className="Adminicon13"><FaHome /></div>
        <div className="Adminicon14"><FaBagShopping /></div>
        <div className="Adminicon15"><MdShoppingCart /></div>
        <div className="Adminicon16"><FaBox /></div>
        <div className="Adminicon117"><CiLogout /></div>
        <div className="Adminicon118"><IoChatboxEllipsesSharp /></div>

        <div className="COPY">Copyright@2023</div>

    </div>
      
    </div>
  )
}

export default Adminsiderbar3