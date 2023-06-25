import { Link } from 'react-router-dom';
import Modal from './Modal/Modal';

function PrivateRoute({ children, condition }) {
    return (
        <>
            <Modal show={condition}>
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