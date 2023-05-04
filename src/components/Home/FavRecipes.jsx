import React from 'react'

import Slider from '../Slider/Slider'

function FavRecipes() {
    return (
        <div className="fav-recipes container">
            <div className="fav-recipes__title">
                <h2>Our Favourite Recipes</h2>
            </div>
            <div className="fav-recipes__content">
                <Slider />
            </div>
        </div>
    )
}

export default FavRecipes