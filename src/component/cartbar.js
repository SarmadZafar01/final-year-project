import React from 'react';
import "../component/profile/profile.css";
import { Link } from 'react-router-dom';
import "./cartbar.css"
import { useDispatch } from 'react-redux';
import { logoutRedux } from "../redux/userSlice";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function CartBar() {
  const dispatch=useDispatch()
  const navigate = useNavigate();

  const handleLogout =()=>{
    dispatch(logoutRedux())
    toast("Logout successfully")
    navigate('/');
      }
  return (
    <div className="newbar1">
      <div>
        <ul className="newbar-links1">
          <li><Link to="/Profile">Profile</Link></li>
          <li><Link to="/muorder">My Order</Link></li>
          <li><Link to="/trackorder">Track Order</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/car">My Car Modification</Link></li>
          
          <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default CartBar;
