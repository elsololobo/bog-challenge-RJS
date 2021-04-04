import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import paymentSlice from './slices/payment.slice'

const reducer = combineReducers({
  payment: paymentSlice
})

const middlewares = [...getDefaultMiddleware()]
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}
export const store = configureStore({
  reducer,
  middleware: middlewares
})
