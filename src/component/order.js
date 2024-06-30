import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrders } from '../redux/orderslice';
import { cancelOrder } from '../redux/orderslice';
import '../component/order.css';
import { toast } from 'react-hot-toast';

function Order() {
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();

  const handleCancelOrder = async (orderId) => {
    try {
      // Clear address details in session storage
      sessionStorage.clear();

      // Dispatch cancelOrder action
      dispatch(cancelOrder(orderId));
      
      // Show success toast
      toast.success('Order Cancelled Successfully');

      // Make a POST request to send email
      await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/sendEmail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId }),
      });
    } catch (error) {
      console.error('Error cancelling order:', error);
    }
  };

  return (
    <div className="Order">
      My Orders
      {orders.map((order, index) => (
        <div key={index}>
          {order.map((product) => (
            <div key={product._id}>
              <img src={product.image} alt={product.name} />
              <p>{product.name} - Quantity: {product.qty} - Total: {product.price}</p>
            </div>
          ))}
          <div className="BBTON">
            <button onClick={() => handleCancelOrder(order._id)}>Cancel Order</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
