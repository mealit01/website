import React from 'react'

import Cards from '../Card/Cards';

function FavRecipes() {
    return (
        <div className="fav-recipes container">
            <div className="fav-recipes__title">
                <h2>Our Favourite Recipes</h2>
            </div>
            <div className="fav-recipes__content">
                <Cards />
            </div>
        </div>
    )
}

export default FavRecipes