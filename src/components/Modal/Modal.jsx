import React from 'react'

import expandLess from '../../assets/images/expand-close.svg'
function Modal({ children, show, onClose, closeIcon, iconName }) {
    if (!show) {
        return null;
    }
    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    {closeIcon && (
                        <div className="modal-header">
                            <button className={`modal-header__close ${iconName}`} onClick={onClose}>
                                <img src={expandLess} alt="close" />
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