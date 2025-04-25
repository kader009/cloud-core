import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('product/fetch', async () => {
  const response = await axios.get(
    `https://admin.refabry.com/api/all/product/get`
  );
  return response.data.data.data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: { data: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        (state.loading = false), (state.data = action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

export default productSlice.reducer;
