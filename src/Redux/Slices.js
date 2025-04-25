
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


const initialUserState = {
  user: null,
  selectedUserType: null, 
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
      state.selectedUserType = null;
    },
    setSelectedUserType: (state, action) => {
      state.selectedUserType = action.payload;
    },
  },
});


export const { login, logout } = authSlice.actions;
export const { setUser, clearUser, setSelectedUserType } = userSlice.actions;

export const authReducer = authSlice.reducer;
export const userReducer = userSlice.reducer;
