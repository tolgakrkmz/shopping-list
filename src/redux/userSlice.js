import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: null,
    userEmail: null,
    isLogged: false,
  },
  reducers: {
    setLoggedUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.isLogged = action.payload.isLogged;
    },
  },
});

export const { setLoggedUser } = userSlice.actions;

export default userSlice.reducer;
