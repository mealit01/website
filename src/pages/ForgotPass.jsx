import React from 'react';
import { Link } from 'react-router-dom';

import EmailSent from '../components/Login/EmailSent';
import ForgotPasswordForm from '../components/Login/ForgotPassword';


const ForgotPassword = () => {
    //   const navigate = useNavigate();
    const [email, setEmail] = React.useState('');

    const handleForgotPassword = (values, { setSubmitting }) => {
        setSubmitting(false);
        setEmail(values.email);
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