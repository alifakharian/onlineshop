import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  code: string | null;
}

const initialState: AuthState = {
  code: null,
};

export const Register = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
  },
});

export const { setCode } = Register.actions;
export default Register.reducer;
