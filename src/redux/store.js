import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './slices/userSlice';
import { topicsReducer } from './slices/topicsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    topics: topicsReducer,
  },
});

export default store;
