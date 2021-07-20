import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: (localStorage.getItem('darkMode') === 'Dark Mode'),
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setDarkMode: (state, { payload: darkMode }) => {
      if (darkMode) {
        localStorage.setItem('darkMode', 'Dark Mode');
      } else {
        localStorage.removeItem('darkMode');
      }

      state.darkMode = darkMode;
    },
  },
});

export const {
  setDarkMode,
} = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
