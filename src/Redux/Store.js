// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { authReducer, userReducer } from './Slices';

const store = configureStore({
  reducer: {
    auth: authReducer,
    userDetails: userReducer,
  },
});

export default store;
