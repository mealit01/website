import React from 'react';
import { Link } from 'react-router-dom';
import logoMealit from '../../assets/images/logo-mealit.png'

const Poster = () => {
    return (
        <div className="poster">
            <div className="poster__content">
                <div className="poster__image">
                    <img src={logoMealit} alt='mealit' />
                </div>
                <div className="poster__text">
                    <h2>
                        For Better Experience <br/> Download our App
                    </h2>
                </div>
                <div className='poster__btns'>
                    <Link className='poster__app google'>
                        Google Play
                    </Link>
                    <Link className='poster__app apple'>
                        App Store
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Poster;
