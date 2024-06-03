import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import CartProduct from './CartProduct';
import validator from 'validator';
import { selectUser } from '../redux/userSlice';
import { placeOrder } from '../redux/orderslice';
import { clearCart } from '../redux/productSlice';

const MyOrder = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const [showSummary, setShowSummary] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [userAddress, setUserAddress] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const totalQty = productCartItem.reduce((acc, curr) => acc + parseInt(curr.qty), 0);
  const totalPrice = productCartItem.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);

  const handleAddressClick = () => {
    if (user?._id) {
      setShowAddress(true);
    } else {
      toast.error('Please log in to proceed');
      navigate('/login');
    }
  }

  const handleSaveAddress = () => {
    // Add logic to save user address (e.g., make an API call, dispatch an action)
    // For simplicity, let's just log the user address for now
    console.log("Saving user address:", userAddress);

    // Save address details in session storage
    sessionStorage.setItem('userAddress', JSON.stringify(userAddress));

    // Show toast notification
    toast.success('Address saved successfully!')

    // Update state to hide the address section
    setShowAddress(false);
  }

  const handlePaymentClick = async () => {
    if (user?._id) {
      try {
        // Validate that each product in the cart has a valid productId
        const isValidCart = productCartItem.every(el => validator.isMongoId(el._id));

        if (!isValidCart) {
          console.error('Invalid product ID format in the cart');
          // Handle the error as needed (e.g., show an error message to the user)
          return;
        }

        // Create an object with userAddress, productsInCart, and summaryDetails
        const paymentData = {
          userAddress,
          productsInCart: productCartItem.map(el => ({
            productId: el._id,
            name: el.name,
            price: el.price,
            quantity: el.qty,
          })),
          summaryDetails: {
            totalQty,
            totalPrice,
          },
        };

        // Make a POST request to your backend endpoint
        const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/processPayment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentData),
        });

        const result = await response.json();

        // Display the result or handle further actions as needed
        console.log(result);
        toast("Payment processed successfully")

        // Dispatch the order
        dispatch(placeOrder(productCartItem));

        // Clear the cart (optional)
        dispatch(clearCart());

        // Navigate to the track order page after payment and pass address details as URL parameters
        navigate(`/trackorder?name=${userAddress.name}&phone=${userAddress.phoneNumber}&address=${userAddress.address}`);
        
      } catch (error) {
        console.error('Error processing payment:', error);
        toast("Error processed successfully")
      }
    } else {
      toast.error('Please log in to proceed');
      navigate('/login');
    }
  }

  useEffect(() => {
    setShowSummary(productCartItem.length > 0);
  }, [productCartItem]);

  return (
    <div className="Cart">
      My Cart
      <div className="">
        {productCartItem.map(el => (
          <CartProduct
            key={el._id}
            id={el._id}
            image={el.image}
            name={el.name}
            qty={el.qty}
            price={el.price}
            total={el.total}
          />
        ))}
      </div>

      {showSummary && (
        <div className="summary">
          Summary
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
          </div>

          <div className="Paymentbutton">
            <button onClick={handleAddressClick}>Address</button>
            <button onClick={handlePaymentClick}>Payment</button>
          </div>
        </div>
      )}

      {showAddress && (
        <div className="Saddress">
          Address
          <div className="Sname">
            <input
              type="text"
              placeholder="Name"
              value={userAddress.name}
              onChange={(e) => setUserAddress({ ...userAddress, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={userAddress.email}
              onChange={(e) => setUserAddress({ ...userAddress, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={userAddress.phoneNumber}
              onChange={(e) => setUserAddress({ ...userAddress, phoneNumber: e.target.value })}
            />
            <input
              type="text"
              placeholder="Address"
              value={userAddress.address}
              onChange={(e) => setUserAddress({ ...userAddress, address: e.target.value })}
            />
          </div>
          <button onClick={handleSaveAddress}>Save Address</button>
        </div>
      )}
    </div>
  );
}

export default MyOrder;
