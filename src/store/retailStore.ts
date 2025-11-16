import { configureStore } from '@reduxjs/toolkit';
import cartReducer  from './Cart/slice';
import productsReducer from './Products/slice';


export const retailStore = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof retailStore.getState>;
export type AppDispatch = typeof retailStore.dispatch;