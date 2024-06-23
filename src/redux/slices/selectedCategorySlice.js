import { createSlice } from '@reduxjs/toolkit';

const selectedCategorySlice = createSlice({
  name: 'selectedCategory',
  initialState: {
    selectedCategory: "",
  },
  reducers: {
    updateSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  },
});

export const { updateSelectedCategory } = selectedCategorySlice.actions;
export default selectedCategorySlice.reducer;
