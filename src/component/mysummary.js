import React from 'react'
import "./mysummary.css";

function Mysummary() {
  return (
    <div>
      
      <div className="summary">Summary
      <div className="TQTY">
        <p>Total Quantity:</p>
        <div className="QU">
        <p>{totalQty}</p>
        </div>
      </div>

      <div className="TPrices">
        <p>Total Price:</p>
        <div className="TPI">
        <p>{totalPrice}</p>
        </div>

        <div className="Paymentbutton">
          <button>Payment</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Mysummary