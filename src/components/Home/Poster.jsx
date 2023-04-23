import React from 'react';
import { Link } from 'react-router-dom';
import phoneApp from '../../assets/images/phone-app.png';

const Poster = () => {
    return (
        <div className="poster">
            <div className="poster__content">
                <div className="poster__image">
                    <img src={phoneApp} alt="phone app" />
                </div>
                <div className="poster__text">
                    <h2>Download Our App Now! </h2>
                    <div className="poster__links">
                        <Link to="/" className="poster__logo">
                            mealit
                        </Link>
                        <div className="poster__apps">
                            <Link to="/" className="poster__app google">
                                Google Play
                            </Link>
                            <Link to="/" className="poster__app apple">
                                App Store
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Poster;
