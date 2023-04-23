import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import hamburger from "../assets/images/hamburger.png";
import close from "../assets/images/close.png";

const Navbar = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <Link to="/login">Login</Link>
                <Link to="/signup" className="signup">Sign Up</Link>
            </div>
        </div>
    )

    return (
        <div className={`navbar ${isMenuOpen ? "navbar--open" : ""}`}>
            <div className="navbar__logo">
                <Link to="/">
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