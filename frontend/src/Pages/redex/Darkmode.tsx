import { createSlice } from "@reduxjs/toolkit";

// تعریف نوع state
interface DarkModeState {
  value: boolean;
}

// گرفتن مقدار ذخیره‌شده در localStorage
const storedDarkMode =
  typeof localStorage !== "undefined" &&
  localStorage.getItem("darkMode") === "true";

const initialState: DarkModeState = {
  value: storedDarkMode,
};

export const Darkmode = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.value = !state.value;
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("darkMode", String(state.value));
      }
    },
  },
});

export const { toggleDarkMode } = Darkmode.actions;
export default Darkmode.reducer;
