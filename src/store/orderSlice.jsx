import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push({ ...action.payload, id: Date.now() });
    },
    cancelOrder: (state, action) =>
      state.filter(o => o.id !== action.payload),
  },
});

export const { addOrder, cancelOrder } = orderSlice.actions;
export default orderSlice.reducer;