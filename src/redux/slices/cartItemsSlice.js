import { createSlice } from '@reduxjs/toolkit';

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: {
    cartItems: [],
  },
  reducers: {
    updateCartItems: (state, action) => {
      state.cartItems = action.payload;
    }
  },
});

export const { updateCartItems } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
