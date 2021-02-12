import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history'

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
        <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
            <div className="header">Delete stream</div>
            <div className="content">
                Are you sure you want to Delete?
            </div>
            <div className="actions">
                <button className="ui button">Cancel</button>
                <button className="ui primary button">Delete</button>

            </div>
        </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;