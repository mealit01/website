import React, { useState } from 'react';
import SearchOptions from './SearchOptions';
import { CSSTransition } from 'react-transition-group';

import { useDispatch, useSelector } from 'react-redux';
import { useFetchFilterOptionsQuery } from '../../state/features/search/searchService';
import { setSearchFilters, addIngredientFilter } from '../../state/features/search/searchSlice';

const SearchSuggestions = () => {
  const [selected, setSelected] = useState('Ingredients');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = useSelector(state => state.search.searchFilters);

  const dispatch = useDispatch();
  const { data } = useFetchFilterOptionsQuery(selected);

  React.useEffect(() => {
    if (data) {
      dispatch(setSearchFilters(data));
    }
  }, [data]);

  const handleAddIngredient = () => {
    dispatch(addIngredientFilter(searchQuery));
    setSearchQuery('');
  }

  return (
    <div className="suggestions">

      <div className="suggestions__search">
        <input
          type="text"
          placeholder="Didn't find ingredient? add it here"
          className="suggestions__search--input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="suggestions__search--btn" onClick={handleAddIngredient}>Add</button>

      </div>

      <div className="suggestions__tabs">
        {Object.keys(filters)?.map((type, index) => (
          <button key={index} className={`suggestions__tabs--btn ${selected === type ? 'active' : ''}`} onClick={() => setSelected(type)}>{type.split('_').join(' ')}</button>
        ))}
      </div>


      <div className="suggestions__list">
        <CSSTransition key={selected} timeout={500} classNames="fade">
          <SearchOptions type={filters[selected]} name={selected} />
        </CSSTransition>
      </div>
    </div>
  );
}

export default SearchSuggestions;
