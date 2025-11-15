import { configureStore } from '@reduxjs/toolkit';
import cartReducer  from './slice';


export const retailStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof retailStore.getState>;
export type AppDispatch = typeof retailStore.dispatch;