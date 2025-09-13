import { createSlice } from "@reduxjs/toolkit";

interface AuthState {}

const initialState: AuthState = {};

export const Shoppingcart = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = Shoppingcart.actions;
export default Shoppingcart.reducer;
