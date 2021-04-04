import { ToastContainer } from 'react-toastify'
import React from 'react'
import './toaster.style.css'

const Toaster = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover
    />
  )
}

export default Toaster
