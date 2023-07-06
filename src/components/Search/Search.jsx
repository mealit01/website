import React from 'react'

import SearchBar from './SearchBar';

function Search() {
  return (
    <div className="search container">
      <h2 className="search-title">
        Try our magic recipe search
      </h2>
        <SearchBar />
    </div>
  )
}

export default Search
