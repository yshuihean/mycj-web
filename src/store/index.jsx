import { configureStore } from '@reduxjs/toolkit';
import {roomApi } from '@/api/roomSlice';
import orderReducer from './orderSlice';

export default configureStore({
  reducer: {
    [roomApi.reducerPath]: roomApi.reducer,
    orders: orderReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(roomApi.middleware),
});