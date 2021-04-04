import React from 'react'
import './loader.style.css'

const Loader = () => {
  return (
    <div className={'overlay'}>
      <div className={'lds-ring'}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
export default Loader
