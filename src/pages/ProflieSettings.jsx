import React from 'react'
import Navbar from '../components/NavLinks'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserDetails } from '../state/features/auth/authActions'
import { useNavigate, Link } from 'react-router-dom'
import ProfileIcon from '../assets/images/settings.svg'

import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'

const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
})

function ProfileSettings() {
    const { userInfo, loading, error, success } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValues = {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
    }

    React.useEffect(() => {
        if (success) {
            navigate('/profile')
        }
    }, [success, navigate])

    return (
        <div className="profile-page">
            <Navbar />
            <div className="profile">
                <div className="profile__body">
                    <div className="profile__header">
                        <h2>
                            <img src={ProfileIcon} alt="profile" />
                            Profile Settings
                        </h2>
                        {userInfo && (
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={(values, onSubmitProps) => {
                                    dispatch(updateUserDetails(values))
                                    onSubmitProps.resetForm()
                                }}
                            >
                                <Form>
                                    {error && <div className="alert alert-danger">{error}</div>}
                                    {success && <div className="alert alert-success">{success}</div>}
                                    <div className="profile__header__details">
                                        <div className="profile__header__details__item">
                                            <label htmlFor="firstName">First Name</label>
                                            <Field type="text" id="firstName" name="firstName" />
                                        </div>
                                        <div className="profile__header__details__item">
                                            <label htmlFor="lastName">Last Name</label>
                                            <Field type="text" id="lastName" name="lastName" />
                                        </div>
                                        <div className="profile__header__details__item">
                                            <label htmlFor="email">Email</label>
                                            <Field type="email" id="email" name="email" />
                                        </div>
                                        <div className="profile__header__details__item submit">
                                            <button className="btn btn-dark" type="submit">
                                                {loading ? 'Loading...' : 'Update'}
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        )}
                        <div className="profile__header__details actions">
                            <div className="profile__header__details__item">
                                password
                                <Link to="/change-password" className="btn ">
                                    Change Password
                                </Link>
                            </div>
                            <div className="profile__header__details__item">
                                Delete account
                                <Link to="/delete-account" className="btn ">
                                    Delete Account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSettings
