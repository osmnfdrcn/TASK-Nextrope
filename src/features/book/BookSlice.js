import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from 'axios'

const initialState = {
  isLoading: false,
  books: {},
  singlebook: {},
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {}

})

export default bookSlice.reducer