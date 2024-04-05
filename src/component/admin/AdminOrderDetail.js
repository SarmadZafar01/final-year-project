import React from 'react'
import Sidebar from './adminsidebar'
import "../admin/Adminorderdetail.css"
import { FaUserAlt } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import plug from "../admin/plug.png";
import headlight from "../admin/headlight.png"
import { Link } from 'react-router-dom';


function AdminOrderDetail() {
  return (
    <div>
      <Sidebar />
      <div className="Toopserarch">
        <form>
          <button type="button"><Link to="/Order">Mark As Deliver</Link></button>
        </form>
        <div className="orderdate">Mon Dec 2023 9:15</div>
        <div className="orderid">Order_id: 68r2899116hhs8136771j</div>
      </div>

      <div className="MainDetail">
      <div className="Orderuser">Customer</div>
      <div className="cOrder">ALi  </div>
      <div className="Gmail">Ali@gmail.com</div>
      <div className="AUSER"><FaUserAlt /></div>


    
      <div className="OrderShip">OrderInfo</div>
      <div className="SOrder">Shippment: User  </div>
      <div className="Pmail">Payment method: Cash On Deliver</div>
      <div className="AUSER2"><FaTruck /></div>

      <div className="OrderAdd">Deliver To</div>
      <div className="AOrder">Address: 335 j   Johar town Near Expo Center  </div>
      
      <div className="AUSER3"><FaLocationDot /></div>
        
      </div>

      <div className="useroderinfo">
        <div className="orderinfo2">
            <div className="orderN">Image</div>
            <div className="orderP">Product</div>
            <div className="orderPP">Prices</div>
            <div className="orderQ">quantity</div>
        </div>

        <div className="orderde">
            <img src={plug} alt="plug"></img>
            <div className="NNAME">Tyota Vitz Spark Plug</div>
            <div className="PPRISE">350</div>
            <div className="QUT">1</div>
        </div>

        <div className="orderde2">
            <img src={headlight} alt="plug"></img>
            <div className="NNAME2">Tyota Corolla headlight</div>
            <div className="PPRISE2">1350</div>
            <div className="QUT2">1</div>
        </div>

        <div className="NNAME3">Product Prices: 1700</div>
            <div className="PPRISE3">Shippment Prices: 0</div>
            <div className="QUT3">Total Prices:1700</div>


      </div>
    </div>
  )
}

export default AdminOrderDetail
