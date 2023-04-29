import React from 'react';
import { Link } from 'react-router-dom';
import Lock from '../../assets/images/lock.svg';

const ChangePasswordDone = () => {
    return (
        <div className="auth-form-done">
            <div className="auth-form-done-header">
                <img src={Lock} alt="Lock" />
                <h3>Password reset</h3>
                <p>
                    Your password has been reset successfully.
                </p>
                <p>
                    Click below to login into your account.
                </p>
                <Link to="/login" className="btn btn-primary">
                    Continue to login
                </Link>
            </div>
        </div>
    )
}

export default ChangePasswordDone;
