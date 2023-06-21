import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import hamburger from "../assets/images/hamburger.png";
import close from "../assets/images/close.png";

import { useSelector, useDispatch } from 'react-redux';
import { useGetUserDetailsQuery } from '../state/features/auth/authService';
import { setCredentials, logout } from '../state/features/auth/authSlice';



const Navbar = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth);

    const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
        pollingInterval: 900000,
    });

    console.log(data, isFetching);

    useEffect(() => {
        if (data) dispatch(setCredentials(data));
    }, [data, dispatch]);

    // if user clicks outside of menu, close menu
    useEffect(() => {
        function handleClickOutside(event) {
            if (isMenuOpen && event.target.className !== "navbar__links") {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);

    const renderLinks = (
        <div className="navbar__links">
            <ul className="navbar__links__list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/recipes">Recipes</Link>
                </li>
                <li>
                    <Link to="/planner">Planner</Link>
                </li>
                <li>
                    <Link to="/pantry">Pantry</Link>
                </li>
                <li>
                    <Link to="/shoppinglist">Shopping list</Link>
                </li>
            </ul>

            <div className="navbar__links__auth">
                {
                    userInfo ? (
                        <>
                        <Link to="/profile" className="btn btn--primary">
                            {userInfo.firstName}
                        </Link>

                        <button className="btn btn--primary signup" onClick={() => dispatch(logout())}>
                            Logout
                        </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup" className="signup">Sign Up</Link>
                        </>
                    )
                }
            </div>
        </div>
    )

    return (
        <div className={`navbar ${isMenuOpen ? "navbar--open" : ""} ${className}`}>
            <div className="navbar__logo">
                <Link to="/" className="logo">
                    Mealit
                </Link>
            </div>


            {className === "mobile-nav" ? (
                <div className="navbar__menu">
                    <CSSTransition
                        in={!isMenuOpen}
                        timeout={100}
                        classNames="hamburger"
                        unmountOnExit
                    >
                        <img src={hamburger} alt="hamburger menu" onClick={() => setIsMenuOpen(true)} />
                    </CSSTransition>

                    <CSSTransition
                        in={isMenuOpen}
                        timeout={100}
                        classNames="close"
                        unmountOnExit
                    >
                        <img src={close} alt="close menu" onClick={() => setIsMenuOpen(false)} />
                    </CSSTransition>
                </div>
            ) : (
                className === "desktop-nav" && renderLinks
            )}


            {className === "mobile-nav" && (
                <CSSTransition
                    in={isMenuOpen}
                    timeout={300}
                    classNames="links"
                    unmountOnExit
                >
                    {renderLinks}
                </CSSTransition>
            )}
        </div>
    );
};

export default Navbar;