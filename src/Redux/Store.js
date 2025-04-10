import { configureStore } from '@reduxjs/toolkit';
import { authReducer, userReducer } from './Slices';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
