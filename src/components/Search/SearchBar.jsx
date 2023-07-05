import React from 'react';
import SearchResults from './SearchResults';
import SearchSuggestions from './SearchSuggestions';
import SearchModal from './SearchModal';

import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../../state/features/search/searchSlice';
import { useFetchSearchResultsQuery } from '../../state/features/search/searchService';
const SearchBar = () => {
  const inputRef = React.useRef(null);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const { searchFiltersApplied, searchQuery } = useSelector(state => state.search);

  const { data } = useFetchSearchResultsQuery({ searchQuery, searchFiltersApplied }, { skip: searchQuery === '' || searchFiltersApplied.length === 0 });
  const dispatch = useDispatch();

  const handleAdd = () => {
    setShowSuggestions(true);
  };

  //live search
  const handleSearch = () => {
    const query = inputRef.current.value;
    if (query.length > 0) {
      dispatch(setSearchQuery(query));
    }
    console.log(searchQuery, searchFiltersApplied);
  };

  return (
    <section className="search">
      {showSuggestions ? (
        <SearchModal onClose={() => setShowSuggestions(false)} show={showSuggestions}>
          <div className="search-box">
            <input type="text" placeholder="Enter ingredients that you have" ref={inputRef} />
            <button className="btn-search" onClick={handleSearch}>
              <img src="" alt="" />
            </button>
          </div>

          <SearchSuggestions
            handleAdd={handleAdd}
          />

        </SearchModal>
      ) : (
        <>
          <div className="search-box">
            <input type="text" placeholder="Enter ingredients that you have" ref={inputRef} onClick={() => setShowSuggestions(true)} />
            <button className="btn-search" onClick={handleSearch}>
              <img src="" alt="" />
            </button>
          </div>
        </>)}

      <SearchResults />
    </section>
  );
}

export default SearchBar;
