import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from './Modal/Modal';

function PrivateRoute({ children }) {
    const userInfo = useSelector((state) => state.auth.userInfo);

    return (
        <>
            <Modal show={!userInfo} >
                <div className="modal-header">
                    <h3>Oops!</h3>
                </div>
                <div className="modal-body">
                    <p>You need to be logged in to view this page.</p>
                </div>
                <div className="modal-footer">
                    <Link to="/login" className="btn btn-dark">
                        Login
                    </Link>
                </div>
            </Modal>
            {children}
        </>
    )
}

export default PrivateRoute