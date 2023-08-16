import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './Contacts/FilterSlice';
import { contactsReducer } from './Contacts/ContactSlice';
import { AuthSliceReducers } from './Auth/AuthSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    register: AuthSliceReducers,
  },
});

export default store;
