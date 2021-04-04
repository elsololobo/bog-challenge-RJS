import { createSlice } from '@reduxjs/toolkit'
import {
  filterTransactions,
  getTransactions
} from '../thunk/transactions.thunk'

export const paymentSlice = createSlice({
  name: 'transaction',
  initialState: {
    transactions: [],
    filter: '',
    activeId: '',
    loading: false,
    error: false,
    stopFetching: false,
    page: 1
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    setActiveId: (state, action) => {
      state.activeId = action.payload
    },
    turnThePage: (state) => {
      state.page++
    },
    resetPage: (state, action) => {
      state.page = action?.payload ?? 1
    },
    addPayment: (state, action) => {
      state.transactions?.unshift(action.payload)
    }
  },
  extraReducers: {
    [getTransactions.fulfilled]: (state, action) => {
      state.transactions =
        state.page === 1
          ? action.payload
          : [...state.transactions, ...action.payload]
      state.loading = false
      state.error = false
      state.stopFetching = action.payload?.length < 10
    },
    [getTransactions.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [getTransactions.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error
      state.stopFetching = action.payload
    },
    [filterTransactions.fulfilled]: (state, action) => {
      state.transactions = action.payload
      state.loading = false
      state.error = false
      state.stopFetching = true
    },
    [filterTransactions.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [filterTransactions.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error
      state.transactions = action.payload
      state.stopFetching = true
    }
  }
})

export const {
  setFilter,
  setActiveId,
  turnThePage,
  resetPage,
  addPayment
} = paymentSlice.actions

export default paymentSlice.reducer
