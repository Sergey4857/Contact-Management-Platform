import {
  fetchContacts,
  addContact,
  deleteContact,
  sortContactAscend,
  sortContactDescend,
  sortContactRandom,
  updateContact,
  openModal,
  closeModal,
} from './Operations';

const { createSlice } = require('@reduxjs/toolkit');

const isLoading = (state, action) => {
  state.isLoading = true;
};
const error = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const ContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    updateContactId: null,
    openModal: false,
  },
  extraReducers: {
    [fetchContacts.pending]: isLoading,
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: error,
    [addContact.pending](state, action) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected]: error,

    [deleteContact.pending](state, action) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    [deleteContact.rejected]: error,

    [updateContact.fulfilled](state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );

      state.items[index].name = action.payload.name;
      state.items[index].number = action.payload.number;

      state.openModal = false;
      state.isLoading = false;
    },
    [updateContact.rejected]: error,

    [updateContact.pending](state, action) {
      state.isLoading = true;
    },
    [sortContactAscend.type](state) {
      state.items = [...state.items].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    },
    [sortContactDescend.type](state) {
      state.items = [...state.items].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    },

    [sortContactRandom.type](state) {
      state.items = state.items.sort(() => Math.random() - 0.5);
    },

    [openModal.type](state, action) {
      state.openModal = !state.openModal;
      state.updateContactId = action.payload;
    },
    [closeModal.type](state, action) {
      state.openModal = false;
    },
  },
});

export const contactsReducer = ContactSlice.reducer;
