import React from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const Login = () => {

    const handleLogin = (values) => {
       
    };

    return (
        <div className="container auth-container">
            <nav className="navbar-logo">
                <Link to="/" className="logo">
                    Mealit
                </Link>
            </nav>

            <div className="auth-inner">
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={LoginSchema}
                    onSubmit={handleLogin}
                >
                    {({ isSubmitting, isValid }) => (
                        <Form action="" className="auth-form" onSubmit={handleLogin}>
                            <Link to="/" className="close-btn">
                                Back to home
                            </Link>
                            <div className="auth-form-header">
                                <h3>Welcome to <span>mealit</span></h3>
                                <p>
                                    login to your account to continue using mealit
                                </p>
                            </div>

                            <div className="form-group">
                                <Field type="email" className="form-control email" placeholder="Email" name="email" />
                                <ErrorMessage name="email" component="div" className="error" />

                                <Field type="password" className="form-control password" placeholder="Password" name="password" />
                                <ErrorMessage name="password" component="div" className="error" />

                                <div className="forgot-password">
                                    <Link to="/forgot-password">forgot password?</Link>
                                </div>

                                <button type="submit" className={`btn btn-primary ${isValid ? "" : "disabled"}`} disabled={!isValid}>
                                    {isSubmitting ? "Loading..." : "Login"}
                                </button>


                            </div>

                            <div className="auth-form-footer">
                                <p>Don't have an account? <Link to="/signup"> Register now</Link></p>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Login;
