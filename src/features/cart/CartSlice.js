import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from 'axios'

const initialState = {
  isLoading: false,
  numberOfBooksInCart: 10,
  booksInCart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {}

})

export default cartSlice.reducer