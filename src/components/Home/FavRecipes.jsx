import React from 'react'

import Cards from '../Card/Cards';
import { useSelector, useDispatch } from 'react-redux';
import { useFetchAllRecipesQuery } from '../../state/features/recipes/recipesService';
import { setRecipes } from '../../state/features/recipes/recipesSlice';
import Spinner from '../Loader/Spinner';

function FavRecipes() {
    const { recipes } = useSelector(state => state.recipes);
    const dispatch = useDispatch();

    const { data, status } = useFetchAllRecipesQuery('recipes');

    React.useEffect(() => {
        if (data) {
            dispatch(setRecipes(data));
        }
        
    }, [data, dispatch]);

    return (
        <div className="fav-recipes container">
            <div className="fav-recipes__title">
                <h2>Our Favourite Recipes</h2>
            </div>
            <div className="fav-recipes__content">
                {
                    status === 'pending' ? <Spinner /> : <Cards recipes={recipes} />
                }
            </div>
        </div>
    )
}

export default FavRecipes