import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFilter, removeFilter } from '../../state/features/search/searchSlice';


function SearchOptions({ type, name, filteredFilters }) {
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
        console.log(filterApplied);
    }

    return (
        <div className="search__options">
            {
                name == 'Ingredients' && pantry.length > 0 && (
                    <div className="pantry__filter--options">
                        <h2 className="pantry__filter--options--title">Choose from your pantry</h2>
                        <div className="pantry__filter--options--items">
                            {
                                pantry.map((item, index) => (
                                    <button key={index} className={`pantry__filter--options--btn ${filterApplied[name.toLowerCase()]?.includes(item) ? 'active' : ''}`} onClick={handleFilter}>{item}</button>
                                ))
                            }
                        </div>
                    </div>
                )
            }
            <div className="search__options--buttons search-filter">
                {filteredFilters?.map((filter, index) => (
                    <button key={index} className={`search__options--btn ${filterApplied[name.toLowerCase()]?.includes(filter) ? 'active' : ''}`} onClick={handleFilter}>{filter}</button>
                ))}
            </div>
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