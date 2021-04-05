import React from 'react'
import './transactions-view.style.css'
import Transaction from '../transaction/transaction'
import { useDispatch } from 'react-redux'
import { setActiveId } from '../../redux/slices/payment.slice'
import Loader from '../loader/loader'

const TransactionsView = ({
  transactions,
  activeId,
  handleScroll,
  loading,
  totalAmount,
  filter
}) => {
  const dispatch = useDispatch()
  const handleTransactionClick = (id) => {
    dispatch(setActiveId(id))
  }
  return (
    <div className={'transactions-view'}>
      {filter && transactions?.length > 0 && (
        <div className={'filtered-transactions-count'}>
          {transactions.length} Transactions Found
        </div>
      )}
      <div className={'transactions-wrapper'} onScroll={(e) => handleScroll(e)}>
        {transactions?.map((transaction, ind) => {
          return (
            <Transaction
              key={ind}
              {...transaction}
              active={transaction.id === activeId}
              handleTransactionClick={handleTransactionClick}
            />
          )
        })}
        {(!transactions || !transactions.length) && !loading && (
          <div className={'overlay'}>No Transactions Found!</div>
        )}
        {loading && <Loader />}
      </div>
      {filter && transactions?.length > 0 && (
        <div className={'total-amount'}>
          Total: {totalAmount.toFixed(2)}
          <span>GEL</span>
        </div>
      )}
    </div>
  )
}
export default TransactionsView
