const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  filter: '',
};

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = FilterSlice.reducer;

export const { filterContact } = FilterSlice.actions;
