import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './features/book/BookSlice';
import cartSlice from './features/cart/CartSlice'

export const store = configureStore({
  reducer: {
    book: bookSlice,
    cart: cartSlice
  }
});