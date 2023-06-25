import React from 'react'

function Modal({ children, show, onClose }) {
    if (!show) {
        return null;
    }
    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal