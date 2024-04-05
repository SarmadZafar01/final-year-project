import React from 'react'
import Sidebar from '../admin/adminsidebar'
import "../admin//AdminDashbord.css"
import sale from "../admin/sale.jpeg";
import pstat from "../admin/pstat.jpeg"


function AdminDashbord() {
  return (
    <div>
      <Sidebar />
      <div className="TotalSale">
      <div className="sale">
        Total Sale<br></br>
        <div className="s1">
        Rs 34560
        </div>
        </div>
      </div>

      <div className="Totalorder">
      <div className="orderss">
        Total order<br></br>
        <div className="o1">
        5
        </div>
        </div>
      </div>

      <div className="Totalproduct">
      <div className="productss">
        Total Product<br></br>
        <div className="pa11">
        11
        </div>
        </div>
      </div>

      <div className="stat">
        <img src={sale} alt="stat"></img>
      </div>

      <div className="pstat">
        <img src={pstat} alt="stat"></img>
      </div>

      <div className="LOrder">Latest Order
      <div className="cOrder">
        ALi 
      </div>
      <div className="Gmail">Ali@gmail.com</div>
      <div className="PPRice">RS350</div>
      <div className="Paid">Paid</div>
      <div className="date">11-12-23</div>
      <hr></hr>
      <div className="c2Order">
        Sarmad
      </div>
      <div className="GGmail">Sarmad@gmail.com</div>
      <div className="PPRice2">RS350</div>
      <div className="Paid2">Paid</div>
      <div className="date2">11-12-23</div>
      <br></br><br></br><br></br>
<div className="hr2">
      <hr></hr>
      </div>
      <div className="c3Order">
        Rafay
      </div>
      <div className="GGGmail">Rafay@gmail.com</div>
      <div className="PPRice3">RS350</div>
      <div className="Paid3">Paid</div>
      <div className="date3">11-12-23</div>
      <br></br><br></br><br></br>
<div className="hr3">
      <hr></hr>
      </div>


      </div>

    
      
      
      
    </div>
  )
}

export default AdminDashbord
