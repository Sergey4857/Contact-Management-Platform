import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './AuthOperations';

const initialState = {
  isLoading: false,
  isLogged: false,
  token: null,
  user: {
    name: null,
    email: null,
  },

  error: null,
};
const AuthSlice = createSlice({
  name: 'auth',

  initialState,

  extraReducers: {
    [register.fulfilled](state, action) {
      state.isLogged = true;
      state.token = action.payload.token;
      state.isLoading = false;
      state.user = action.payload.user;
    },
    [login.fulfilled](state, action) {
      state.isLogged = true;
    },
    [logout.fulfilled](state, action) {
      state.isLogged = true;
    },
  },
});

export const AuthSliceReducers = AuthSlice.reducer;
