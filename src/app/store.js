import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
