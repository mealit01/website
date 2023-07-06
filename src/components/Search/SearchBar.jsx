import React from 'react';
import SearchSuggestions from './SearchSuggestions';
import SearchModal from './SearchModal';
import Spinner from '../Loader/Spinner';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setSearchResults } from '../../state/features/search/searchSlice';
import { useFetchSearchResultsQuery } from '../../state/features/search/searchService';

const SearchBar = () => {
  const inputRef = React.useRef(null);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const { searchFiltersApplied, searchQuery } = useSelector(state => state.search);

  const navigate = useNavigate();
  const { data, isLoading } = useFetchSearchResultsQuery({ searchQuery, searchFiltersApplied }, { skip: searchQuery === '' || searchFiltersApplied.length === 0 });
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

  React.useEffect(() => {
    if (data) {
      dispatch(setSearchResults(data));
      navigate('/recipes/search');
    }
  }, [data]);

  return (
    <section className="search">
      {showSuggestions ? (
        <SearchModal onClose={() => setShowSuggestions(false)} show={showSuggestions}>
          <div className="search-box">
            <input type="text" placeholder="Enter ingredients that you have" ref={inputRef} />
            <button className="btn-search" onClick={handleSearch} disabled={isLoading}>
              <img src="" alt="" />
            </button>
          </div>

          {isLoading ? (
            <div className="search__loading">
              <Spinner />
            </div>
          ) : (
            <SearchSuggestions onAdd={handleAdd} />
          )}


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

    </section>
  );
}

export default SearchBar;
