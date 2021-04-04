import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchTransactions,
  searchTransactions
} from '../../api/transactions.api'

export const getTransactions = createAsyncThunk(
  'transactions/get',
  async (page, { rejectWithValue }) => {
    try {
      return await fetchTransactions(page)
    } catch (err) {
      return rejectWithValue(true, err)
    }
  }
)
export const filterTransactions = createAsyncThunk(
  'transactions/filter',
  async (filter, { rejectWithValue }) => {
    try {
      return await searchTransactions(filter)
    } catch (err) {
      return rejectWithValue([], err)
    }
  }
)
