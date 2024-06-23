import { createSlice } from '@reduxjs/toolkit';

const productsToViewSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    updateProductsToView: (state, action) => {
      state.products = action.payload;
    }
  },
});

export const { updateProductsToView } = productsToViewSlice.actions;
export default productsToViewSlice.reducer;
