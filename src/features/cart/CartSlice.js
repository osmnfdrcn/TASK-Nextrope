import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from 'axios'

import { OrderThunk } from './CartThunk'


const initialState = {
  isLoading: false,
  cartItems: [],
  error: null,
  amount: 1
}


export const order = createAsyncThunk(
  'cart/order',
  async (data, thunkAPI) => {
    return OrderThunk('/order', data, thunkAPI)
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToChart: (state, { payload }) => {
      const isBookInCart = state.cartItems.filter((b) => b.id == payload.id)

      isBookInCart.length
        ? isBookInCart[0].amount += payload.amount
        : state.cartItems = [...state.cartItems, payload]
      state.amount = 1
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((book) => book.id !== payload)
    },
    emptyCart: (state, { payload }) => {
      state.cartItems = []
    },
    updateAmount: (state, { payload }) => {
      state.amount = payload
    },
    increaseItemAmountInCart: (state, { payload }) => {
      const isBookInCart = state.cartItems.filter((b) => b.id == payload)
      if (isBookInCart.length) { isBookInCart[0].amount += 1 }
    },
    decreaseItemAmountInCart: (state, { payload }) => {
      const isBookInCart = state.cartItems.filter((b) => b.id == payload)
      if (isBookInCart[0].amount === 1) { state.cartItems = state.cartItems.filter((book) => book.id !== payload) }
      if (isBookInCart.length) { isBookInCart[0].amount -= 1 }
    }
  },
  extraReducers: {
    [order.pending]: (state) => {
      state.isLoading = true
    },
    [order.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.error = false
      state.cartItems = []
    }
    ,
    [order.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.error = true
    },
  }


})

export const { addToChart, removeFromCart, emptyCart, updateAmount, increaseItemAmountInCart, decreaseItemAmountInCart } = cartSlice.actions
export default cartSlice.reducer