import React from 'react'
import { Link } from 'react-router-dom'
import Email from '../../assets/images/email-open.png'

function EmailSent({ email, setEmail }) {
    return (
        <div className="auth-form-done">

            <Link to="/login" className="close-btn">
                Back to login
            </Link>

            <div className="auth-form-done-header">
                <img src={Email} alt="Email" />
                <h3>Check your email</h3>
                <p>We’ve sent a password reset link to 
                    <span className="email">
                        {email}
                    </span>
                </p>
            </div>

            <div className="auth-form-done-footer">
                <p>Didn’t receive an email?
                    <button className="btn-link" onClick={() => setEmail('')}>
                        try again
                    </button>
                </p>
            </div>

        </div>
    )
}

export default EmailSent