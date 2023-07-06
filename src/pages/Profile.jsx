import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import ProfilePic from '../assets/images/profile-pic.svg'
import { Link } from 'react-router-dom'
import React from 'react'
import ProfileIcon from '../assets/images/profile.svg'

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth)

  React.useEffect(() => {
    //scroll to top
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile">
        <div className="profile__body">
          {userInfo && (
            <div className="profile__header">
              <h2>
                <img src={ProfileIcon} alt="profile" />
                Personal Information
              </h2>
              <div className="profile__header__details">
                <div className="profile__header__details__item">
                  Current Avatar
                  <img src={ProfilePic} alt="profile" />
                </div>
                <div className="profile__header__details__item">
                  First Name
                  <p>{userInfo.firstName}</p>
                </div>
                <div className="profile__header__details__item">
                  Last Name
                  <p>{userInfo.lastName}</p>
                </div>
                <div className="profile__header__details__item">
                  Email
                  <p>{userInfo.email}</p>
                </div>
                <div className="profile__header__details__item submit">
                  <Link className="btn btn-dark" to="/profile-settings">
                    Edit Profile
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile