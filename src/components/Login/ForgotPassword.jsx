import React from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

function ForgotPassword({ handleForgotPassword }) {

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={ForgotPasswordSchema}
      onSubmit={handleForgotPassword}
    >
      {({ isSubmitting, isValid }) => (
        <Form className="auth-form">
          <Link to="/login" className="close-btn">
            Back to login
          </Link>
          <div className="auth-form-header">
            <h3>Forgot your password?</h3>
            <p>Enter your email address and we’ll send you a link to reset your password.</p>
          </div>

          <div className="form-group">
            <Field type="email" className="form-control email" placeholder="Email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />

            <button type="submit" className={`btn btn-primary ${!isValid || isSubmitting ? 'disabled' : ''}`} disabled={!isValid || isSubmitting}>
              {isSubmitting ? 'Please wait...' : 'Send reset link'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ForgotPassword
