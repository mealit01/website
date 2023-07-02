import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../state/features/auth/authActions";
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Loader/Spinner';

const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    passwordConfirm: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
});

function SignUp() {
    const dispatch = useDispatch();
    const { loading, userInfo, error, success } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            navigate("/profile");
        }
    }, [userInfo, success, navigate]);
            
    const handleSignUp = (values) => {
        dispatch(signup(values));
    };

    return (
        <div className=" auth-container">
            <nav className="navbar-logo">
                <Link to="/" className="logo">
                    Mealit
                </Link>
            </nav>

            <div className="auth-inner">
                {error && <div className="alert alert-danger">{error}</div>}
                <Formik
                    initialValues={{ email: "", password: "", name: "", passwordConfirm: "" }}
                    validationSchema={LoginSchema}
                    onSubmit={handleSignUp}
                >
                    {({ isSubmitting, isValid }) => (
                        <Form action="" className="auth-form">
                            <Link to="/" className="close-btn">
                                go back
                            </Link>
                            <div className="auth-form-header">
                                <h3>Welcome to <span>mealit</span></h3>
                                <p>
                                    register to create account and start exploring the recipes and customize your preference.
                                </p>
                            </div>

                            <div className="form-group">
                                <Field type="text" className="form-control name" placeholder="Name" name="name" />
                                <ErrorMessage name="name" component="div" className="error" />

                                <Field type="email" className="form-control email" placeholder="Email" name="email" />
                                <ErrorMessage name="email" component="div" className="error" />

                                <Field type="password" className="form-control password" placeholder="Password" name="password" />
                                <ErrorMessage name="password" component="div" className="error" />

                                <Field type="password" className="form-control password" placeholder="Confirm Password" name="passwordConfirm" />
                                <ErrorMessage name="passwordConfirm" component="div" className="error" />

                                <button type="submit" className={`btn btn-primary ${isValid ? "" : "disabled"}`} disabled={!isValid}>
                                    {loading ? <Spinner width="20px" height="20px" /> : "Sign Up"}
                                </button>

                                <div className="auth-form-footer">
                                    <p>
                                        Already have an account? <Link to="/login">Login</Link>
                                    </p>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default SignUp
