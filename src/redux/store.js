import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './slices/userSlice';
import { topicsReducer } from './slices/topicsSlice';
import { settingsReducer } from './slices/settingsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    topics: topicsReducer,
    settings: settingsReducer,
  },
});

export default store;
