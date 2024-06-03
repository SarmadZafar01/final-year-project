import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
 
  reducers: {
    placeOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    cancelOrder: (state, action) => {
      state.orders = state.orders.filter((order) => order._id !== action.payload);
    },
  },
});

export const { placeOrder, cancelOrder } = orderSlice.actions;

export const selectOrders = (state) => state.order.orders;

export default orderSlice.reducer; 