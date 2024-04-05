import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  name: 'product',
  productList: [],
  cartItem: [],
  searchTerm: '', // New state for search term
  comments: [], // Add the comments state
}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setData: (state, action) => {
      console.log(action);
      state.productList = [...action.payload];
    },

    addCartItem: (state, action) => {
      const check = state.cartItem.some(el => el._id === action.payload._id);
      console.log(check);
      if (check) {
        toast("Already Item in Cart");
      } else {
        toast("One Item Added Successfully");
        const total = action.payload.price * action.payload.qty;
        state.cartItem = [...state.cartItem, { ...action.payload, qty: 1, total: total }];
      }
    },
    
    deleteCartItem: (state, action) => {
      toast("One Item Deleted");
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      state.cartItem.splice(index, 1);
      console.log(index);
    },

    deleteItem: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      if (index !== -1) {
        state.cartItem.splice(index, 1);
      }
    },

    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      const qtyInc = ++qty;
      state.cartItem[index].qty = qtyInc;

      // Update the total price based on the increased quantity
      state.cartItem[index].total = state.cartItem[index].price * qtyInc;
    },

    decreaseQTY: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;

      if (qty > 1) {
        const qtyDnc = --qty;
        state.cartItem[index].qty = qtyDnc;

        // Update the total price based on the decreased quantity
        state.cartItem[index].total = state.cartItem[index].price * qtyDnc;
      }
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    addComment: (state, action) => {
      state.comments.push(action.payload);
    },

    clearCart: (state) => {
      toast("Cart Cleared");
      state.cartItem = [];
    },
  },
});

export const {
  setData,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQTY,
  setSearchTerm,
  deleteItem,
  addComment,
  clearCart,
} = productSlice.actions;

export default productSlice.reducer;