import React from 'react'
import Sidebar from '../admin/adminsidebar'
import "../admin/AdminOrder.css";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

function AdminOrder() {
  return (
    <div>
      <Sidebar />
      <div className="Topserarch">
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <div className="Orderinfo">
        <div className="N11"> Name</div>
        <div className="E11"> Email</div>
        <div className="T11"> Total</div>
        <div className="S11"> Status</div>
        <div className="D11"> Date</div>
        <div className="A11"> Action</div>
        
      </div>
      <div className="Ooder">
      <div className="cOrder">
        ALi 
      </div>
      <div className="Gmail">Ali@gmail.com</div>
      <div className="PPRice">RS350</div>
      <div className="Paid">Deliver</div>
      <div className="date">11-12-23</div>
      <div className="Actionicon">
      <Link to="/OrderDetail"><FaEye /></Link>
      </div>
      <hr></hr>

      <div className="c2Order">
        Sarmad
      </div>
      <div className="GGmail">Sarmad@gmail.com</div>
      <div className="PPRice2">RS350</div>
      <div className="Paid2">Deliver</div>
      <div className="date2">11-12-23</div>
      <br></br><br></br><br></br>
<div className="hr2">
      <hr></hr>
      </div>
      <div className="Actionicon2">
      <Link to="/OrderDetail"><FaEye /></Link>
      </div>

      <div className="c3Order">
        Rafay
      </div>
      <div className="GGGmail">Rafay@gmail.com</div>
      <div className="PPRice3">RS350</div>
      <div className="Paid3">Deliver</div>
      <div className="date3">11-12-23</div>
      <br></br><br></br><br></br>
<div className="hr3">
      <hr></hr>
      </div>
      <div className="Actionicon3">
      <Link to="/OrderDetail"><FaEye /></Link>
      </div>

   

      </div>
    </div>
  )
}

export default AdminOrder
