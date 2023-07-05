import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useFetchAllRecipesQuery } from '../../state/features/recipes/recipesService'
import { setRecipes, nextPage } from '../../state/features/recipes/recipesSlice'
import { fetchMoreRecipes } from '../../state/features/recipes/recipesActions'
import { searchRecipes } from '../../state/features/planner/plannerActions'
import CardsList from '../Card/CardsList';

import closeIcon from '../../assets/images/close.png'

function PlannerModal({ close, meal }) {
    const [search, setSearch] = React.useState('');
    const { recipes, page } = useSelector(state => state.recipes);
    const { searchResults } = useSelector(state => state.planner);
    const { data } = useFetchAllRecipesQuery('recipes');

    const dispatch = useDispatch();

    const handleNextPage = () => {
        dispatch(nextPage());
        console.log(page);
        dispatch(fetchMoreRecipes(page));
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(searchRecipes(search));
        console.log(searchResults);
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
                            <input type="text" placeholder="Search for a recipe" onChange={handleSearch} />
                            <button className="btn btn-dark" onClick={handleSearchSubmit}>Search</button>
                        </div>
                        <div className="modal__content--body--results">
                            <CardsList cards={searchResults?.length > 0 ? searchResults : recipes} meal={meal} />
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