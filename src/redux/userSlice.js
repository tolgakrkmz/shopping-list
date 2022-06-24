import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: null,
    userEmail: null,
    userIsLogged: false,
  },
  reducers: {
    setLoggedUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userIsLogged = action.payload.isLogged;
    },
  },
});

export const { setLoggedUser } = userSlice.actions;

export default userSlice.reducer;
