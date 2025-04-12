import { configureStore } from '@reduxjs/toolkit';
import { authReducer, userReducer } from './Slices'; // path depends on your structure

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
