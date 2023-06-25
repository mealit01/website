import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../state/features/auth/authSlice'
import { useDispatch } from 'react-redux'
import ProfilePic from '../../assets/images/profile-pic.svg'

function ProfileDropdown({ className }) {
    const [isListOpen, setIsListOpen] = useState(false);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    // if user clicks outside of menu, close menu
    useEffect(() => {
        function handleClickOutside(event) {
            if (isListOpen && event.target.className !== "profile-dropdown__list__active" && event.target.className !== "profile-dropdown__header") {
                setIsListOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isListOpen]);

    return (
        <div className={`${className} profile-dropdown` }>
            <div className={`profile-dropdown__header ${isListOpen ? "profile-dropdown__header__active" : ""}`} onClick={() => setIsListOpen(!isListOpen)}>
                <img src={ProfilePic} alt="profile" />
            </div>
            <ul className={`profile-dropdown__list ${isListOpen ? "profile-dropdown__list__active" : ""}`}>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/bookmarks">Bookmarks</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
                <li>
                    <Link onClick={handleLogout}>Logout</Link>
                </li>
            </ul>
        </div>
    )
}

export default ProfileDropdown