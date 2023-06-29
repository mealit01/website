import React from 'react'
import closeX from '../../assets/images/close.png'

function Modal({ children, show, onClose, closeIcon, close, title }) {
    if (!show) {
        return null;
    }

    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    {close && (
                        <div className="modal-header">
                            <h2 className="modal-title">{title}</h2>
                            <button className={`${closeIcon ? '' : 'close'}`} onClick={onClose}>
                                <img src={closeIcon ? closeIcon : closeX} alt="close modal" />
                            </button>
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal