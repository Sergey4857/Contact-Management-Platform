import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://64d4d634b592423e4694c1f9.mockapi.io/contacts'
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://64d4d634b592423e4694c1f9.mockapi.io/contacts',
        text
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://64d4d634b592423e4694c1f9.mockapi.io/contacts/${id}`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sortContactAscend = createAsyncThunk(
  'contacts/sortContact',
  async (text, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://64d4d634b592423e4694c1f9.mockapi.io/contacts?sortBy=name&order=asc'
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const sortContactDescend = createAsyncThunk(
  'contacts/sortContact',
  async (text, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://64d4d634b592423e4694c1f9.mockapi.io/contacts?sortBy=name&order=desc'
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
