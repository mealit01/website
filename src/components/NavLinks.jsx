import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import hamburger from "../assets/images/hamburger.png";
import close from "../assets/images/close.png";
import ProfileDropdown from "../components/Login/ProfileDropdown";

import { useSelector, useDispatch } from 'react-redux';
import { useGetUserDetailsQuery } from '../state/features/auth/authService';
import { setCredentials } from "../state/features/auth/authSlice";


const Navbar = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const userInfo = useSelector((state) => state.auth.userInfo);
    const dispatch = useDispatch();

    const { data, isFetching } = useGetUserDetailsQuery('userDetails',{
        pollingInterval: 900000, // 15 minutes
        skip: !userInfo,
    });

    useEffect(() => {
        if (data !== undefined) {
            dispatch(setCredentials(data));
        }
    }, [dispatch, data]);

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

            <div className={`navbar__links__auth ${userInfo ? "navbar__links__auth__info" : ""}`}>
                {
                    isFetching ? (
                        <div className="navbar__links__auth__loading">
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        userInfo ? (
                            <ProfileDropdown className={className} />
                        ) : (
                            <div className="navbar__links__auth">
                                <Link to="/login" className="btn">
                                    Login
                                </Link>
                                <Link to="/signup" className="btn signup">
                                    Signup
                                </Link>
                            </div>
                        )
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