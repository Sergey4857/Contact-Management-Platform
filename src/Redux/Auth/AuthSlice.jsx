import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refresh } from './AuthOperations';

const initialState = {
  isLoading: false,
  isLogged: false,
  token: null,
  user: {
    name: null,
    email: null,
  },
  isRefreshing: false,

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
    [refresh.fulfilled](state, action) {
      state.isLogged = true;
      state.user = action.payload;
      state.isLoading = false;
      state.isRefreshing = false;
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
    [refresh.pending](state, action) {
      state.isLoading = true;
      state.isRefreshing = true;
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
    [logOut.rejected](state, action) {
      state.isLogged = false;
      state.error = action.payload;
      state.isLoading = false;
    },
    [refresh.rejected](state, action) {
      state.isLogged = false;
      state.error = action.payload;
      state.isLoading = false;
      state.isRefreshing = false;
    },
  },
});

export const AuthSliceReducers = AuthSlice.reducer;
