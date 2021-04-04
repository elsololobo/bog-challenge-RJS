import React, { useRef } from 'react'
import './toolbar.style.css'
import searchImg from '../../assets/search.png'
import Modal from '../modal/modal-popup'
import AddTransaction from '../add-transaction/add-transaction'
import { DebounceInput } from 'react-debounce-input'
import { addPayment, setFilter } from '../../redux/slices/payment.slice'
import { addTransaction } from '../../api/transactions.api'
import BurntToast from '../toaster/burnt-toast'

const Toolbar = ({ dispatch }) => {
  const addPaymentModal = useRef(null)

  const handleAddPayment = (params) => {
    addTransaction(params).then(
      (res) => {
        dispatch(addPayment(res))
        closeModal()
        BurntToast('info', 'Payment Was Added Successfully!')
      },
      (err) => {
        BurntToast('error', 'Oops, Something Went Wrong!')
      }
    )
  }

  const closeModal = () => {
    addPaymentModal.current?.handleCloseModal()
  }

  return (
    <div className={'toolbar'}>
      <div
        className={'add-transaction'}
        onClick={() => addPaymentModal.current?.handleOpenModal()}
      >
        <span className={'add-transaction-icon'}>+</span>
        <span>ADD PAYMENT</span>
      </div>
      <div className={'filter-transaction'}>
        <div className={'filter-input-wrapper'}>
          <span>
            <img src={searchImg} alt={'search'} width={'35'} height={'35'} />
          </span>
          <DebounceInput
            type={'text'}
            className={'filter-input'}
            placeholder={'Filter by any property'}
            minLength={3}
            debounceTimeout={500}
            onChange={(e) => dispatch(setFilter(e.target.value))}
          />
        </div>
        {/*<div className={'submit-filter-wrapper'}>*/}
        {/*  <button type={'button'} className={'submit-filter'}>*/}
        {/*    Filter*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
      <Modal ref={addPaymentModal} header={'Add Payment'} className="mw-650">
        <AddTransaction handleAddPayment={handleAddPayment} />
      </Modal>
    </div>
  )
}

export default Toolbar
