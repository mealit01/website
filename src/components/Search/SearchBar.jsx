import React from 'react';
import SearchResults from './SearchResults';
import SearchSuggestions from './SearchSuggestions';

const ingredients = [
  'apple',
  'banana',
  'chicken',
  'egg',
  'fish',
  'milk',
  'onion',
  'orange',
  'potato',
  'rice',
  'tomato',
  'olive oil',
  'butter',
  'salt',
  'pepper',
  'sugar',
  'flour',
  'water',
  'bread',
  'cheese',
  'chocolate',
  'coffee',
  'cucumber',
  'garlic',
  'honey',
];

const SearchBar = () => {
  const inputRef = React.useRef(null);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [filteredIngredients, setFilteredIngredients] = React.useState([]);
  const [selectedIngredients, setSelectedIngredients] = React.useState([]);

  const handleSelect = (ingredient) => {
    const newSelectedIngredients = [...selectedIngredients];
    // check if ingredient is already selected
    if (newSelectedIngredients.indexOf(ingredient) === -1) {
      newSelectedIngredients.push(ingredient);
    }
    setSelectedIngredients(newSelectedIngredients);
    inputRef.current.value = '';
    setFilteredIngredients([]);
  };

  const handleRemove = (ingredient) => {
    const newSelectedIngredients = [...selectedIngredients];
    const index = newSelectedIngredients.indexOf(ingredient);
    newSelectedIngredients.splice(index, 1);
    setSelectedIngredients(newSelectedIngredients);
  };


  const handleAdd = () => {
    setShowSuggestions(true);
  };

  //live search
  const handleSearch = () => {
    const searchValue = inputRef.current.value;
    setShowSuggestions(true);
    if (searchValue === '') {
      setFilteredIngredients([]);
      return;
    }

    //convert searchValue to lowercase
    const searchValueLower = searchValue.toLowerCase();
    const filtered = ingredients.filter((ingredient) => ingredient.includes(searchValueLower));

    if (filtered.length === 0) {
      setFilteredIngredients([]);
      return;
    }

    setFilteredIngredients(filtered);
  };

  return (
    <section className="search">
      <h2 className="search-title">
        Try our magic recipe search
      </h2>
      <div className="search-box">
        <button className="btn-add" type="button" onClick={handleAdd}>

        </button>
        <input type="text" placeholder="Enter ingredients that you have" onChange={handleSearch} ref={inputRef} />
        <button className="btn-search">
          <img src="" alt="" />
        </button>
      </div>

      {showSuggestions &&
        <SearchSuggestions
          ingredients={filteredIngredients.length > 0 ? filteredIngredients : ingredients}
          handleSelect={handleSelect}
          handleRemove={handleRemove}
          selectedIngredients={selectedIngredients}
        />}

      <SearchResults />
    </section>
  );
}

export default SearchBar;