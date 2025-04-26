import { configureStore } from '@reduxjs/toolkit'
import productReducer from './feature/productSlice.js'
import sigleProductReducer from './feature/singleProductSlice.js'

export const store = configureStore({
  reducer: {
    products: productReducer,
    singleProduct: sigleProductReducer,
  },
})