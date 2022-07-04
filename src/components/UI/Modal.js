import classes from './Modal.module.css';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';



const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};



const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};



const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop  onClose={props.onClose}/>,
          document.getElementById('overlays'))}

      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('overlays'),
      )}
    </Fragment>
  );
};

export default Modal;

/*
const Modal=(props)=>{

    return (
        <Fragment >
            <Backdrop />
            <ModalOverlay>{props.children}</ModalOverlay>
        </Fragment>
    )
    */
