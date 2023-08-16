import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(auth_token) {
    return (axios.defaults.headers.common.Authorization = `Bearer ${auth_token}`);
  },

  clear() {
    return (axios.defaults.headers.common.Authorization = '');
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (info, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', info);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (info, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', info);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.clear();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
