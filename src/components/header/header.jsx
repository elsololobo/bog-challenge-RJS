import React from 'react'
import './header.style.css'
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Header = () => {
  return (
    <div className={'header-wrapper'}>
      <div className={'container'}>
        <div className={'header'}>
          <Logo className={'logo'} />
          <div>current user</div>
        </div>
      </div>
    </div>
  )
}
export default Header
