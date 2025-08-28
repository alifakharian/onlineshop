import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  phone: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  phone: null,
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),
};


export const Register = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCode: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setTokens: (
      state,
      action: PayloadAction<{ access: string; refresh: string }>
    ) => {
      state.accessToken = action.payload.access;
      state.refreshToken = action.payload.refresh;
      localStorage.setItem("accessToken", action.payload.access);
      localStorage.setItem("refreshToken", action.payload.refresh);
    },
     clearAuth: (state) => {
      state.phone = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { setCode, setTokens } = Register.actions;
export default Register.reducer;
