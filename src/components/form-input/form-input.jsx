import React from 'react'
import './form-input.style.css'
import { categories } from '../../api/categories'

const FormInput = ({ handleChange, label, type, ...otherProps }) => {
  return (
    <div className={'form-group'}>
      {label ? <label className={'form-input-label'}>{label}</label> : null}
      {type === 'select' ? (
        <select
          onChange={handleChange}
          className={'form-input'}
          {...otherProps}
        >
          {categories.map((option, ind) => {
            return (
              <option key={ind} className={'select-option'} value={option}>
                {option}
              </option>
            )
          })}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          className={'form-input text-area'}
          onChange={handleChange}
          {...otherProps}
        />
      ) : (
        <input
          className={'form-input'}
          onChange={handleChange}
          type={type}
          {...otherProps}
        />
      )}
    </div>
  )
}
export default FormInput
