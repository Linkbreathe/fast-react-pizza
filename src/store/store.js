import { combineReducers } from 'redux';
import userReducer from '../features/user/userSlice';
import cartReducer from '../features/cart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
export default store;
