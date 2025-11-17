import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartsState {
  items: { id: number; name: string; price: number }[];
}

const initialState: CartsState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{ id: number; name: string; price: number }>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;