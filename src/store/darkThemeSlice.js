// darkThemeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: false,
};

const darkThemeSlice = createSlice({
  name: "darkTheme",
  initialState,
  reducers: {
    toggleDarkTheme(state) {
      console.log("BORE TOGGLE", state.darkTheme);
      state.darkTheme = !state.darkTheme;
      console.log("After toggle", state.darkTheme);
    },
  },
});

export const themeActions = darkThemeSlice.actions;
export default darkThemeSlice.reducer;
