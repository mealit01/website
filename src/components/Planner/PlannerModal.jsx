import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useFetchAllRecipesQuery } from '../../state/features/recipes/recipesService'
import { setRecipes, nextPage } from '../../state/features/recipes/recipesSlice'
import { fetchMoreRecipes } from '../../state/features/recipes/recipesActions'

import CardsList from '../Card/CardsList';

import closeIcon from '../../assets/images/close.png'

function PlannerModal({ close, meal }) {
    const { recipes, page } = useSelector(state => state.recipes);
    const { data } = useFetchAllRecipesQuery('recipes');

    const dispatch = useDispatch();

    const handleNextPage = () => {
        dispatch(nextPage());
        console.log(page);
        dispatch(fetchMoreRecipes(page));
    }

    useEffect(() => {
        if (data) {
            dispatch(setRecipes(data));
        }
    }, [data, dispatch]);

    return (
        <div className="modal-overlay" onClick={close}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__content">
                    <div className="modal-header">
                        <h3 className="modal-title">Add meal</h3>
                        <button className="close" onClick={close}> <img src={closeIcon} alt="close modal" /></button>
                    </div>
                    <div className="modal__content--body">
                        <div className="modal__content--body--search">
                            <input type="text" placeholder="Search for a recipe" />
                            <button className="btn btn-dark">Search</button>
                        </div>
                        <div className="modal__content--body--results">
                            <CardsList cards={recipes} meal={meal} />
                        </div>

                        <div className="modal__content--body--load-more">
                            <button className="btn btn-dark" onClick={handleNextPage}>Load more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlannerModal