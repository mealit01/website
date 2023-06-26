import React from 'react'
import Navbar from '../components/NavLinks'
import { useSelector } from 'react-redux'
import ProfileIcon from '../assets/images/settings.svg'
function ProflieSettings() {
    const { userInfo } = useSelector((state) => state.auth)
    
    return (
        <div className="profile-page">
            <Navbar />
            <div className="profile">
                <div className="profile__body">
                {userInfo && (
                    <div className="profile__header">
                        <h2>
                            <img src={ProfileIcon} alt="profile" />
                            Profile Settings
                        </h2>
                        <div className="profile__header__details">
                            
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default ProflieSettings