import { configureStore } from "@reduxjs/toolkit";
import { Darkmode } from "./Darkmode";
import { Register } from "./Register";
import { Shoppingcart } from "./Shoppingcart";

export const store = configureStore({
  reducer: {
    Darkmode: Darkmode.reducer,
    Register: Register.reducer,
    Shoppingcart: Shoppingcart.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
