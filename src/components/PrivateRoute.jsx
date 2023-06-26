import { Link } from 'react-router-dom';
import Modal from './Modal/Modal';
import { useSelector } from 'react-redux';

function PrivateRoute({ children }) {
    const userInfo = useSelector((state) => state.auth.userInfo);

    return (
        <>
            <Modal show={!userInfo}>
                <div className="login">
                    <div className="login__header">
                        <h3>Oops!</h3>
                    </div>
                    <div className="login__body">
                        <p>You need to be logged in to view this page.</p>

                        <Link to="/login" className="btn btn-dark">
                            Login
                        </Link>
                    </div>
                </div>
            </Modal>
            {children}
        </>
    )
}

export default PrivateRoute