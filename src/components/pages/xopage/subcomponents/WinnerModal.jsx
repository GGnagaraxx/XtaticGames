import React from 'react'

function WinnerModal(props) {

    const {message, active, hasManualClose, handleCloseModal} = props;

    return (
        <div className={"modal-backdrop" + (active ? " active" : "")}>
            <div className='winner-modal'>
                <h1 className='winner-message'>{message}</h1>
            </div>
            <button 
                className={'modal-close-btn' + (hasManualClose ? " visible" : "")}
                onClick={handleCloseModal}> 
                    Close 
            </button>
        </div>
    )
}

export default WinnerModal