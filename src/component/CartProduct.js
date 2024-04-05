// CartProduct.js
import React from 'react';
import "./CartProduct.css"; // Correct the import statement
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteCartItem} from '../redux/productSlice';
import { increaseQty } from '../redux/productSlice';
import { decreaseQTY } from '../redux/productSlice';


const CartProduct = ({ id, image, name, qty, price, total }) => {

    const dispatch=useDispatch()


  return (
    <div className="cart-product">
    <div className="Cartinfo">
        <div className="Cartinfo2">
            <div className="orderNN">Image</div>
            <div className="orderPPP">Product</div>
            <div className="orderPri">Prices</div>
            <div className="orderQTY">quantity</div>
            <div className="Delteitem">Delete</div>
        </div>
    </div>
      <div className="cart-product-title">
      <img src={image} alt={name} />
      
      </div>
      <div className="CartName">
        <p>{name}</p>
      </div>
      <div className="CartPrice">
        <p>{price}</p>
      </div>

      <div className="QTR-buttons">
          <button className="add" onClick={()=>dispatch(increaseQty(id))}><FaPlus /></button>
          <p>{qty}</p>
          <button className="minus" onClick={()=>dispatch(decreaseQTY(id))}> <TiMinus /></button>
          <div className="delete" onClick={()=>dispatch(deleteCartItem(id))}> <MdDelete /></div>
        </div>
       

    </div>
  );
};

export default CartProduct;
