import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import cartReducer  from './Cart/slice';
import productsReducer from './Products/slice';
import { watchCartDelete } from './Cart/cartSaga';


const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const retailStore = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(watchCartDelete);

export type RootState = ReturnType<typeof retailStore.getState>;
export type AppDispatch = typeof retailStore.dispatch;