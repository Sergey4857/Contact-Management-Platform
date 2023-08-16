import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './FilterSlice';
import { contactsReducer } from './ContactSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
