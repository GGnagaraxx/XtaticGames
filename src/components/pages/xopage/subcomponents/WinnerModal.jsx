import React, { useEffect } from 'react'

function WinnerModal(props) {

    const {message, active, hasManualClose, handleCloseModal} = props;

    useEffect(() => {
      
        if(active){
            document.getElementById("winner-modal-close-btn").focus()
        }

    }, [active])
    

    return (
        <div className={"modal-backdrop" + (active ? " active" : "")}>
            <div className='winner-modal'>
                <h1 className='winner-message'>{message}</h1>
            </div>
            <button 
                className={'modal-close-btn' + (hasManualClose ? " visible" : "")}
                id="winner-modal-close-btn"
                onClick={handleCloseModal}> 
                    Close 
            </button>
        </div>
    )
}

export default WinnerModal