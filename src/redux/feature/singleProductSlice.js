import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductById = createAsyncThunk(
  'product/fetchById',
  async (id, thunkAPI) => {
    const response = await axios.get(
      `https://admin.refabry.com/api/all/product/get`
    );

    const allProducts = response.data.data.data;
    const product = allProducts.find((p) => p.id === parseInt(id, 10));
    console.log('slice', product);

    if (!product) {
      return thunkAPI.rejectWithValue('product not found');
    }
    return product;
  }
);

const singleProductSlice = createSlice({
  name: 'single product',
  initialState: {
    product: null,
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false, 
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false, 
        state.error = action.payload || action.error.message;
      });
  },
});

export default singleProductSlice.reducer;
