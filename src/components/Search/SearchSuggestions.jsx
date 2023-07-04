import React, { useState } from 'react';
import SearchOptions from './SearchOptions';
import { CSSTransition } from 'react-transition-group';

import { useDispatch, useSelector } from 'react-redux';
import { useFetchFilterOptionsQuery } from '../../state/features/search/searchService';
import { setSearchFilters } from '../../state/features/search/searchSlice';

const SearchSuggestions = () => {
  const [selected, setSelected] = useState('Ingredients');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = useSelector(state => state.search.searchFilters);
  const allFilters = useSelector(state => state.search.allSearchFilters);

  const dispatch = useDispatch();
  const { data } = useFetchFilterOptionsQuery(selected);

  React.useEffect(() => {
    if (data) {
      dispatch(setSearchFilters(data));
      console.log(allFilters);
    }
  }, [data]);

  const filteredFilters = allFilters.filter((filter) =>
    searchQuery === '' ? '' : filter.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="suggestions">

      <div className="suggestions__search">
        <input
          type="text"
          placeholder="Search for filters"
          className="suggestions__search--input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

      </div>

      <div className="suggestions__tabs">
        {Object.keys(filters)?.map((type, index) => (
          <button key={index} className={`suggestions__tabs--btn ${selected === type ? 'active' : ''}`} onClick={() => setSelected(type)}>{type}</button>
        ))}
      </div>


      <div className="suggestions__list">
        <CSSTransition key={selected} timeout={500} classNames="fade">
          <SearchOptions type={filters[selected]} name={selected} filteredFilters={filteredFilters} />
        </CSSTransition>
      </div>
    </div>
  );
}

export default SearchSuggestions;
