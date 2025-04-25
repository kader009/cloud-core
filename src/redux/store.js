import { configureStore } from '@reduxjs/toolkit'
import productReducer from './feature/productSlice.js'

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
})