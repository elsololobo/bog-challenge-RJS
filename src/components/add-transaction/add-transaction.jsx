import React, { useState } from 'react'
import './add-transaction.style.css'
import FormInput from '../form-input/form-input'

const AddTransaction = ({ handleAddPayment }) => {
  const [state, setState] = useState({
    title: '',
    amount: undefined,
    category: 'Payments',
    date: '',
    comment: ''
  })
  const { title, amount, category, date, comment } = state
  const handleChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: name === 'amount' ? parseInt(value) : value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    handleAddPayment(state)
  }
  return (
    <div className={'add-transaction-form-wrapper'}>
      <form
        className={'add-transaction-form'}
        onSubmit={(e) => handleSubmit(e)}
      >
        <FormInput
          type={'text'}
          name={'title'}
          required={true}
          label={'Title:'}
          value={title}
          onChange={(e) => handleChange(e)}
          maxLength={50}
        />
        <FormInput
          type={'number'}
          name={'amount'}
          required={true}
          label={'Amount:'}
          value={amount}
          onChange={(e) => handleChange(e)}
          min={-10000}
          max={10000}
        />
        <FormInput
          type={'select'}
          name={'category'}
          value={category}
          required={true}
          label={'Category:'}
          onChange={(e) => handleChange(e)}
        />
        <FormInput
          type={'date'}
          name={'date'}
          required={true}
          label={'Date:'}
          max={new Date().toISOString().slice(0, 10)}
          value={date}
          onChange={(e) => handleChange(e)}
        />
        <FormInput
          type={'textarea'}
          name={'comment'}
          required={true}
          label={'Comment:'}
          value={comment}
          onChange={(e) => handleChange(e)}
          maxLength={100}
        />
        <button type={'submit'} className={'add-payment-submit-button'}>
          CREATE
        </button>
      </form>
    </div>
  )
}

export default AddTransaction
