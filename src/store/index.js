import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userSlice';
import cartReducer from './cartSlice';

const store = configureStore(
  {
    reducer: {
      user: userReducer,
      cart: cartReducer,
    },
  },
  composeWithDevTools()
);

export default store;
