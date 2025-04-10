import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

// --- User Slice ---
const initialUserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'userDetails',
  initialState: initialUserState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});


// Export the actions
export const { login, logout } = authSlice.actions;
export const { setUser, clearUser } = userSlice.actions;

// Export the reducers
export const authReducer = authSlice.reducer;
export const userReducer = userSlice.reducer;
