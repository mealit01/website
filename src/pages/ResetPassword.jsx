import React from 'react'
import ChangePassword from '../components/Login/ChangePassword'
import { Link } from 'react-router-dom'

function ResetPassword() {
    React.useEffect(() => {
        //scroll to top
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="auth-container">
            <nav className="navbar-logo">
                <Link to="/" className="logo">
                    Mealit
                </Link>
            </nav>

            <div className="auth-inner">
                <ChangePassword />
            </div>
        </div>
    )
}

export default ResetPassword