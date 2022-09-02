import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
  getBooksThunk,
  getSingleBookThunk

} from './BookThunk'

const initialState = {
  isLoading: false,
  books: [],
  singlebook: {},
  total_records: 0,
  records_per_page: 0,
  current_page: 1,
  total_pages: 1,
  error: false
}

export const getBooks = createAsyncThunk(
  'book/getBooks',
  async (url, thunkAPI) => {
    return getBooksThunk(`/book${url}`, thunkAPI)
  }
)
export const getSingleBook = createAsyncThunk(
  'book/getSingleBook',
  async (id, thunkAPI) => {
    return getSingleBookThunk(`/book/${id}`, thunkAPI)
  }
)

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    updateCurrentPage: (state, { payload }) => {
      state.current_page = payload
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true
    },
    [getBooks.fulfilled]: (state, { payload }) => {
      const { data, metadata } = payload
      const { total_records, records_per_page } = metadata
      state.books = data
      state.total_records = total_records
      state.records_per_page = records_per_page
      state.total_pages = Math.ceil(total_records / records_per_page)
      state.isLoading = false
      state.error = false

    },
    [getBooks.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.error = true
    },
    [getSingleBook.pending]: (state) => {
      state.isLoading = true
    },
    [getSingleBook.fulfilled]: (state, { payload }) => {
      const { data } = payload
      state.singlebook = data
      state.isLoading = false
      state.error = false
      state.current_page = 1
    },
    [getSingleBook.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.error = true
    },
  }

})

export const { updateCurrentPage } = bookSlice.actions
export default bookSlice.reducer