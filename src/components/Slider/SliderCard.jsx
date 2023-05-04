import React from 'react'

import star from '../../assets/images/star.svg'
import heart from '../../assets/images/heart.svg'


function SliderCard({ item, handleFav }) {

    return (
        <div className="slider__card card">
            <div className="card__img">
                <img src={item.img} alt={item.title} />
            </div>
            <div className="card__title">
                <h4>{item.title}</h4>
            </div>
            <div className="card__content">
                <div className="card__rating">
                    <div className="card__rating__stars">
                        <img src={star} alt="star" />
                    </div>
                    <div className="card__rating__number">
                        {item.rating}
                    </div>
                </div>
                <div className="card__fav">
                    <div className={`card__fav__icon ${item.fav ? 'active' : ''}`} onClick={() => handleFav(item.id)}>
                        <img src={heart} alt="heart" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderCard