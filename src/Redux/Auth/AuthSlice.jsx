import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut } from './AuthOperations';

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
      state.error = null;
    },
    [login.fulfilled](state, action) {
      state.isLogged = true;
      state.token = action.payload.token;
      state.isLoading = false;
      state.user = action.payload.user;
      state.error = null;
    },
    [logOut.fulfilled](state, action) {
      state.isLogged = false;
      state.error = null;
    },

    [register.pending](state, action) {
      state.isLoading = true;
    },
    [login.pending](state, action) {
      state.isLoading = true;
    },
    [logOut.pending](state, action) {
      state.isLoading = true;
    },

    [register.rejected](state, action) {
      state.isLogged = false;
      state.error = action.payload;
      state.isLoading = false;
    },
    [login.rejected](state, action) {
      state.isLogged = false;
      state.error = action.payload;
      state.isLoading = false;
    },
    [logOut.rejected](state, action) {
      state.isLogged = false;
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const AuthSliceReducers = AuthSlice.reducer;
