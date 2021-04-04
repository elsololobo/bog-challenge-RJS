import React from 'react'
import { toast } from 'react-toastify'

const BurntToast = (type, content, options) => {
  let component = (
    <div className={'global-notification'}>
      <div className={'notification-text flex-1'}>{content}</div>
    </div>
  )
  return toast(component, {
    type: type,
    closeButton: ['error', 'success', 'info'].includes(type),
    position: 'bottom-right',
    draggable: false,
    pauseOnHover: false,
    hideProgressBar: false,
    ...options
  })
}
export default BurntToast
