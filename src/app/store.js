import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';
import chatReducer from '../features/counter/chatSlice';



export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});