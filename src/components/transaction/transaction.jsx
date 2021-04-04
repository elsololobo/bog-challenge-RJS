import React from 'react'
import './transaction.style.css'

const Transaction = ({
  id,
  title,
  amount,
  date,
  category,
  comment,
  active,
  handleTransactionClick
}) => {
  return (
    <div
      className={`transaction ${active ? 'active' : ''}`}
      onClick={() => handleTransactionClick(active ? '' : id)}
    >
      <div className={'transaction-flex-content'}>
        <div className={'left-content'}>
          <div className={'transaction-title'}>{title}</div>
          <div className={'transaction-category'}>{category}</div>
        </div>
        <div className={'right-content'}>
          <div className={'transaction-date'}>{date}</div>
          <div
            className={`transaction-amount ${amount > 0 ? 'green-text' : ''}`}
          >
            {amount.toFixed(2)}
          </div>
          <div
            className={`transaction-currency ${amount > 0 ? 'green-text' : ''}`}
          >
            GEL
          </div>
        </div>
      </div>
      <div className={'transaction-comment'}>
        <div>Comment:</div>
        <div className={'comment'}>{comment}</div>
      </div>
    </div>
  )
}

export default Transaction
