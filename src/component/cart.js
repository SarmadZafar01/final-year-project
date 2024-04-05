// NavBar.js
import React from 'react';
import NavBar from "./navb";
import MyCrder from './mycart';
import "../component/CartProduct";
import CartBar from './cartbar';




const Cart =()=> {

    return (
    <div>
 <NavBar />
 <CartBar />
 <MyCrder />

    </div>
    
  );
}

export default Cart;
