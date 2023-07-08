import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useChangePasswordMutation, useLogoutUserMutation } from '../state/features/auth/authService';
import { logout } from '../state/features/auth/authSlice';
const ChangePasswordSchema = Yup.object().shape({
    currentPassword: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
});

function ChangePassword() {
    const [changePassword, isError ] = useChangePasswordMutation();
    const [logoutUser] = useLogoutUserMutation();

    const handleChangepassword = (values, { setSubmitting }) => {
        changePassword(values);
        setSubmitting(false);
    }



    return (
        <div className="auth-container">
            <nav className="navbar-logo">
                <Link to="/" className="logo">
                    Mealit
                </Link>
            </nav>
            <div className="auth-inner">
                <Formik
                    initialValues={{ password: '', passwordConfirm: '', currentPassword: '' }}
                    validationSchema={ChangePasswordSchema}
                    onSubmit={handleChangepassword}
                >
                    {({ isSubmitting, isValid }) => (
                        <Form className="auth-form">
                            <Link to="/" className="close-btn">
                                Back to home
                            </Link>
                            <div className="auth-form-header">
                                <h3>Set a new password</h3>
                                <p>Your new password must be different from previous used passwords.</p>
                            </div>
                            {
                                isError && ( <div className="alert alert-danger" role="alert"> {isError} </div> )
                            }
                            <div className="form-group">
                                <Field type="password" className="form-control password" placeholder="Old password" name="currentPassword" />
                                <ErrorMessage name="currentPassword" component="div" className="error" />

                                <Field type="password" className="form-control password" placeholder="New password" name="password" />
                                <ErrorMessage name="password" component="div" className="error" />

                                <Field type="password" className="form-control password" placeholder="Confirm password" name="passwordConfirm" />
                                <ErrorMessage name="passwordConfirm" component="div" className="error" />

                                <button type="submit" className={`btn btn-primary ${!isValid || isSubmitting ? 'disabled' : ''}`} disabled={!isValid || isSubmitting}>
                                    {isSubmitting ? 'Loading...' : isError ? 'Try again' : 'Change password'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ChangePassword