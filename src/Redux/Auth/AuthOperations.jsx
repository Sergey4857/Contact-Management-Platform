import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = auth_token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${auth_token}`);

const clearToken = () => (axios.defaults.headers.common.Authorization = '');

export const register = createAsyncThunk(
  'auth/register',
  async (info, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', info);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (info, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', info);
    setToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
    if (error.response.status === 400) {
      error.message = 'Неправильный логин или пароль';
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk(
  'auth/refresh',

  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    setToken(token);
    try {
      const res = await axios.get('/users/current');
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
