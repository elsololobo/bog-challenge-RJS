import React, { Component } from 'react'
import './modal.style.css'
import ReactModal from 'react-modal'
import closeIcon from '../../assets/close-icon.png'

ReactModal.setAppElement('#root')

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  handleOpenModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <ReactModal
        isOpen={this.state.showModal}
        shouldCloseOnOverlayClick={this.props.shouldCloseOnOverlayClick}
        onRequestClose={this.props.onRequestClose}
        className={'popup-body'}
        overlayClassName={'popup'}
        shouldCloseOnEsc={this.props.shouldCloseOnEsc}
      >
        <>
          <div className={'popup-header'}>
            <div className={'popup-header-title'}>{this.props.header}</div>
            <div className={'close-icon'} onClick={this.handleCloseModal}>
              <img src={closeIcon} alt={'closeIcon'} width={20} height={20} />
            </div>
          </div>
          <div className={'popup-content'}>{this.props.children}</div>
        </>
      </ReactModal>
    )
  }
}

export default Modal
