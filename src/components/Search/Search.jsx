import React from 'react'

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function Search() {
  return (
    <div className="search container">
      <h2 className="search-title">
        Try our magic recipe search
      </h2>
        <SearchBar />
        <SearchResults />
    </div>
  )
}

export default Search
