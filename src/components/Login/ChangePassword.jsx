import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ChangePasswordSchema = Yup.object().shape({
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
});

function ChangePassword({ handleChangepassword }) {
    return (
        <Formik
            initialValues={{ password: '', confirmPassword: '' }}
            validationSchema={ChangePasswordSchema}
            onSubmit={handleChangepassword}
        >
            {({ isSubmitting, isValid }) => (
                <Form className="auth-form">
                    <Link to="/login" className="close-btn">
                        Back to login
                    </Link>
                    <div className="auth-form-header">
                        <h3>Set a new password</h3>
                        <p>Your new password must be different from previous used passwords.</p>
                    </div>

                    <div className="form-group">
                        <Field type="password" className="form-control password" placeholder="New password" name="password" />
                        <ErrorMessage name="password" component="div" className="error" />

                        <Field type="password" className="form-control password" placeholder="Confirm password" name="confirmPassword" />
                        <ErrorMessage name="confirmPassword" component="div" className="error" />

                        <button type="submit" className={`btn btn-primary ${!isValid || isSubmitting ? 'disabled' : ''}`} disabled={!isValid || isSubmitting}>
                            {isSubmitting ? 'Please wait...' : 'Set new password'}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ChangePassword