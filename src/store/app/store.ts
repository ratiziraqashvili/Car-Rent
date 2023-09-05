// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/userSlice"

// Define your Redux store
const store = configureStore({
  reducer: {
    user: userReducer
  },
});

export default store;
