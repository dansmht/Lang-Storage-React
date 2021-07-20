import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setDarkMode: (state, { payload: darkMode }) => {
      state.darkMode = darkMode;
    },
  },
});

export const {
  setDarkMode,
} = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
