import React from 'react';
import { Link } from 'react-router-dom';

import EmailSent from '../components/Login/EmailSent';
import ForgotPasswordForm from '../components/Login/ForgotPassword';

import { useDispatch } from 'react-redux';
import { forgotPassword } from '../state/features/auth/authActions';


const ForgotPassword = () => {
    const [email, setEmail] = React.useState('');
    const dispatch = useDispatch();
    
    const handleForgotPassword = (values, { setSubmitting }) => {
        setSubmitting(false);
        setEmail(values.email);
        dispatch(forgotPassword(values));
    };



    return (
        <div className="auth-container">
            <nav className="navbar-logo">
                <Link to="/" className="logo">
                    Mealit
                </Link>
            </nav>

            <div className="auth-inner">
                {email ? (
                    <EmailSent email={email} setEmail={setEmail} />
                ) : (
                    <ForgotPasswordForm handleForgotPassword={handleForgotPassword} />
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;