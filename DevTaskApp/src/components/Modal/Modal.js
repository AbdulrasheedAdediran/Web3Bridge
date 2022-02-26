import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';


const Backdrop = (props) =>{
    return(
        <div onClick={props.onClose} className={'backdrop'}></div>
    )
}

const Overlay = (props) =>{
    return (
        <div className={'modal'}>
        <div>{props.children}</div>
    </div>
    )
}
function Modal(props) {
  return (
      <React.Fragment>
          {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('backdrop'))}
          {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlay'))}
      </React.Fragment>
  )
}

export default Modal;
