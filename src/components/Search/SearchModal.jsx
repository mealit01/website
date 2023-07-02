import React from 'react'
import closeX from '../../assets/images/close.png'

function SearchModal({ children, show, onClose, closeIcon, close, title }) {
    if (!show) {
        return null;
    }

    return (
        <>
            <div className="search-modal" onClick={onClose}>
                <div className="search-modal__content" onClick={e => e.stopPropagation()}>
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

export default SearchModal