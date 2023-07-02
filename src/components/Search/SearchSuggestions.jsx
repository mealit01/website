import React, { useState } from 'react';
import SearchOptions from './SearchOptions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useDispatch } from 'react-redux';

//convert to object
const typePlaceholder = {
  Ingredients: ['Apple', 'Banana', 'Orange', 'Pineapple', 'Strawberry', 'Watermelon', 'Avocado', 'Grape', 'Lemon', 'Lime', 'Mango', 'Pear', 'Peach', 'Plum', 'Raspberry', 'Blackberry', 'Blueberry', 'Cranberry', 'Grapefruit', 'Melon', 'Raisin', 'Date', 'Fig', 'Prune', 'Coconut', 'Pumpkin', 'Squash', 'Sweet Potato', 'Yam', 'Cauliflower', 'Broccoli', 'Cabbage', 'Brussels Sprouts', 'Kale', 'Spinach', 'Lettuce', 'Arugula', 'Bok Choy', 'Chard', 'Collard Greens', 'Endive', 'Radicchio', 'Romaine', 'Watercress', 'Asparagus', 'Artichoke', 'Beet', 'Carrot', 'Celery', 'Fennel', 'Jicama', 'Leek', 'Okra', 'Onion', 'Parsnip', 'Peas', 'Radish', 'Rutabaga', 'Turnip', 'Zucchini', 'Cucumber', 'Eggplant', 'Mushroom', 'Potato', 'Tomato', 'Corn', 'Bell Pepper', 'Chili Pepper', 'Jalapeno', 'Poblano', 'Serrano', 'Anaheim', 'Habanero', 'Cayenne', 'Tabasco', 'Chipotle', 'Paprika', 'Cinnamon', 'Nutmeg', 'Clove', 'Ginger', 'Turmeric', 'Cumin', 'Coriander', 'Cardamom', 'Saffron', 'Curry', 'Chili Powder', 'Cayenne Pepper', 'Paprika', 'Cinnamon', 'Nutmeg'],
  Dietary: ['Vegetarian', 'Vegan', 'Gluten Free', 'Dairy Free', 'Nut Free', 'Soy Free', 'Egg Free', 'Peanut Free', 'Shellfish Free', 'Wheat Free', 'Fish Free', 'Kosher', 'Halal', 'Low Sugar', 'Low Carb', 'Low Fat', 'Low Calorie', 'Paleo', 'Pescatarian', 'Primal', 'Whole30', 'Keto', 'Mediterranean', 'DASH', 'FODMAP'],
  Allergies: ['Vegetarian', 'Vegan', 'Gluten Free', 'Dairy Free', 'Nut Free', 'Soy Free', 'Egg Free', 'Peanut Free', 'Shellfish Free', 'Wheat Free', 'Fish Free', 'Kosher', 'Halal', 'Low Sugar', 'Low Carb', 'Low Fat', 'Low Calorie', 'Paleo', 'Pescatarian', 'Primal', 'Whole30', 'Keto', 'Mediterranean', 'DASH', 'FODMAP'],
  MealType: [ 'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Appetizer', 'Dessert'],
  Cuisine: ['African', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese', 'Eastern European', 'European', 'French', 'German', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese', 'Western']
}

const SearchSuggestions = () => {
  const [selected, setSelected] = useState('Ingredients');

  return (
    <div className="suggestions">
      {/* search bar */}
      <div className="suggestions__search">
        <input type="text" placeholder="Search for filters" className="suggestions__search--input" />
        <button className="suggestions__search--btn">
          search
        </button>
      </div>

      {/* tabs for many filters */}
      <div className="suggestions__tabs">
        <button className={`suggestions__tabs--btn ${selected === 'Ingredients' ? 'active' : ''}`} onClick={() => setSelected('Ingredients')}>Ingredients</button>
        <button className={`suggestions__tabs--btn ${selected === 'Dietary' ? 'active' : ''}`} onClick={() => setSelected('Dietary')}>Dietary</button>
        <button className={`suggestions__tabs--btn ${selected === 'Allergies' ? 'active' : ''}`} onClick={() => setSelected('Allergies')}>Allergies</button>
        <button className={`suggestions__tabs--btn ${selected === 'MealType' ? 'active' : ''}`} onClick={() => setSelected('MealType')}>Meal Type</button>
        <button className={`suggestions__tabs--btn ${selected === 'Cuisine' ? 'active' : ''}`} onClick={() => setSelected('Cuisine')}>Cuisine</button>
      </div>

      {/* list of ingredients */}
      <div className="suggestions__list">
        <CSSTransition key={selected} timeout={500} classNames="fade">
          <SearchOptions type={typePlaceholder[selected]} name={selected} />
        </CSSTransition>
      </div>
    </div>
  );
}

export default SearchSuggestions;
