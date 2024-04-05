// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user: {}
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers :{
        loginRedux : (state,action)=>{
            state.user = action.payload.data;
        },
        logoutRedux : (state,action)=>{
            state.user = {};
        }
    }
});

export const { loginRedux, logoutRedux } = userSlice.actions;

export const selectUser = state => state.user.user; // Add this selector

export default userSlice.reducer;
