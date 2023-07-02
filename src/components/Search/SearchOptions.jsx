import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFilter, removeFilter } from '../../state/features/search/searchSlice';


function SearchOptions({ type, name }) {
    const dispatch = useDispatch();
    const { filters } = useSelector(state => state.search);
    const { pantry } = useSelector(state => state.pantry);

    const handleFilter = (e) => {
        const filter = e.target.textContent;
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
            dispatch(removeFilter(filter));
        } else {
            e.target.classList.add('active');
            dispatch(addFilter(filter));
        }
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
                                <button key={index} className="pantry__filter--options--btn" onClick={handleFilter}>{item.name}</button>
                            ))
                        }
                    </div>
                </div>
            )
        }
        <div className="search__options--buttons">
        {
            type.map((item, index) => (
                <button key={index} className="search__options--btn" onClick={handleFilter}>{item}</button>
            ))
        }
        </div>
    </div>
  )
}

export default SearchOptions