import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { createAction } from '@reduxjs/toolkit';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

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
      const response = await axios.post('/contacts', text);

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
      const response = await axios.delete(`contacts/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ number, name, id }, thunkAPI) => {
    try {
      const response = await axios.patch(`contacts/${id}`, {
        number,
        name,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const sortContactAscend = createAction('contacts/sortContactAscend');

export const sortContactDescend = createAction('contacts/sortContactDescend');

export const sortContactRandom = createAction('contacts/sortContactRandom');

export const openModal = createAction('auth/openModal');

export const closeModal = createAction('auth/closeModal');
