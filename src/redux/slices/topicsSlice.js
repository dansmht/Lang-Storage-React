import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: null,
  currentPage: null,
  totalTopics: 0,
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
    setCurrentPage: (state, { payload: page }) => {
      state.currentPage = page;
    },
    setTotalTopics: (state, { payload: total }) => {
      state.totalTopics = total;
    },
  },
});

export const {
  setTopics,
  setTopicsIsLoading,
  setCurrentPage,
  setTotalTopics,
} = topicsSlice.actions;

export const topicsReducer = topicsSlice.reducer;
