import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserIsLoading: (state, isLoading) => {
      state.isLoading = isLoading;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { logout, setUser, setUserIsLoading } = userSlice.actions;

export const userReducer = userSlice.reducer;