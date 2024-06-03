// chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: localStorage.getItem('username') || '',
  room: localStorage.getItem('room') || '',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.username = action.payload.username;
      state.room = action.payload.room;
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('room', action.payload.room);
    },
  },
});

export const { setUserInfo } = chatSlice.actions;

export default chatSlice.reducer;
