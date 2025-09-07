import { createSlice } from "@reduxjs/toolkit";

interface AlertState {
  a: number;
}

const initialState: AlertState = {
  a: 12,
};

export const Search = createSlice({
  name: "alert",
  initialState,
  reducers: {},
});

export const {} = Search.actions;
export default Search.reducer;
