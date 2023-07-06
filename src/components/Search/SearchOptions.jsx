import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFilter, removeFilter } from '../../state/features/search/searchSlice';


function SearchOptions({ type, name }) {
    const dispatch = useDispatch();
    const { pantry } = useSelector(state => state.pantry);
    const filterApplied = useSelector(state => state.search.searchFiltersApplied);

    const handleFilter = (e) => {
        const filterValue = e.target.textContent;
        const filterType = name.toLowerCase();
        if (filterApplied[filterType]?.includes(filterValue)) {
            dispatch(removeFilter({ filterType, filterValue }));
        } else {
            dispatch(addFilter({ filterType, filterValue }));
        }
        console.log(pantry);
    }

    return (
        <div className="search__options">
            {
                name == 'ingredients' && pantry.length > 0 && (
                    <div className="pantry__filter--options">
                        <h2 className="pantry__filter--options--title">Choose from your pantry 🥔</h2>
                        <div className="search__options--buttons">
                            {
                                pantry.map((item, index) => (
                                    <button key={index} className={`search__options--btn active`} onClick={handleFilter}>{item.name}</button>
                                ))
                            }
                        </div>
                    </div>
                )
            }
            
            <div className="search__options--buttons">
                {
                    type?.map((item, index) => (
                        item ? <button key={index} className={`search__options--btn ${filterApplied[name.toLowerCase()]?.includes(item) ? 'active' : ''}`} onClick={handleFilter}>{item}</button> : ''
                    ))
                }
            </div>
        </div>
    )
}

export default SearchOptions