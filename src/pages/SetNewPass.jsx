import React from 'react';
import { Link } from 'react-router-dom';

import ChangePasswordDone from '../components/Login/ChangePasswordDone';
import ChangePasswordForm from '../components/Login/ChangePassword';

const SetNewPass = () => {

    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const setNewPassword = (values, { setSubmitting }) => {
        setSubmitting(false);
        setIsSubmitted(true);
    };


    return (
        <div>
            <div className="auth-container">
                <nav className="navbar-logo">
                    <Link to="/" className="logo">
                        Mealit
                    </Link>
                </nav>

                <div className="auth-inner">
                    {isSubmitted ? (
                        <ChangePasswordDone />
                    ) : (
                        <ChangePasswordForm handleChangepassword={setNewPassword} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default SetNewPass;
