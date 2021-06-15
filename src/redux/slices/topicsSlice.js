import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: null,
  isLoading: false,
};

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    setTopicsIsLoading: (state, { payload: isLoading }) => {
      state.isLoading = isLoading;
    },
    setTopics: (state, { payload: topics }) => {
      state.topics = topics;
    },
  },
});

export const { setTopics, setTopicsIsLoading } = topicsSlice.actions;

export const topicsReducer = topicsSlice.reducer;
