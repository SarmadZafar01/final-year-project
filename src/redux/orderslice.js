import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  userAddress: null,
  paymentDetails: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    setPaymentDetails: (state, action) => {
      state.paymentDetails = action.payload;
    },
    cancelOrder: (state, action) => {
      state.orders = state.orders.filter((order) => order._id !== action.payload);
    },
    setUserAddress: (state, action) => {
      state.userAddress = action.payload;
    },
    clearUserAddress: (state) => {
      state.userAddress = null;
    },
  },
});

export const {
  placeOrder,
  cancelOrder,
  setUserAddress,
  setPaymentDetails,
  clearUserAddress,
} = orderSlice.actions;

export const selectOrders = (state) => state.order.orders;
export const selectUserAddress = (state) => state.order.userAddress;
export const selectPaymentDetails = (state) => state.order.paymentDetails;

export default orderSlice.reducer;
