import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserIsLoading: (state, { payload: isLoading }) => {
      state.isLoading = isLoading;
    },
    setUser: (state, { payload: user }) => {
      state.user = user;
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
});

export const { resetUser, setUser, setUserIsLoading } = userSlice.actions;

export const userReducer = userSlice.reducer;
