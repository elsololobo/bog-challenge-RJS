import React, { useCallback, useEffect } from 'react'
import './home.style.css'
import Toolbar from '../../components/toolbar/toolbar'
import TransactionsView from '../../components/transactions-view/transactions-view'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectActiveId,
  selectError,
  selectFilter,
  selectLoading,
  selectPage,
  selectPayments,
  selectStopFetching,
  selectTotalAmount
} from '../../redux/selectors/transactions.selector'
import { createStructuredSelector } from 'reselect'
import {
  filterTransactions,
  getTransactions
} from '../../redux/thunk/transactions.thunk'
import { resetPage, turnThePage } from '../../redux/slices/payment.slice'

const structuredSelector = createStructuredSelector({
  transactions: selectPayments,
  activeId: selectActiveId,
  filter: selectFilter,
  page: selectPage,
  loading: selectLoading,
  error: selectError,
  stopFetching: selectStopFetching,
  totalAmount: selectTotalAmount
})

const Home = () => {
  const {
    transactions,
    activeId,
    filter,
    page,
    loading,
    error,
    stopFetching,
    totalAmount
  } = useSelector(structuredSelector)
  const dispatch = useDispatch()
  const handleScroll = useCallback(
    (e) => {
      if (stopFetching) return
      let el = e.target
      if (el.scrollHeight - el.scrollTop - el.clientHeight <= 1)
        dispatch(turnThePage())
    },
    [stopFetching, dispatch]
  )

  useEffect(() => {
    if (page) dispatch(getTransactions(page))
  }, [page])

  useEffect(() => {
    if (filter) {
      dispatch(filterTransactions(filter))
      dispatch(resetPage(0))
    } else dispatch(resetPage())
  }, [filter])

  return (
    <div className={'container'}>
      <Toolbar filter={filter} dispatch={dispatch} />
      <TransactionsView
        transactions={transactions}
        activeId={activeId}
        handleScroll={handleScroll}
        loading={loading}
        totalAmount={totalAmount}
        filter={filter}
      />
    </div>
  )
}
export default Home
