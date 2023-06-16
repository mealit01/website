import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const SearchSuggestions = ({ ingredients, handleSelect, selectedIngredients, handleRemove }) => {
  return (
    <div className="ingredients-suggestions">
      {
        selectedIngredients.length > 0 && (
          <div className="">
            <TransitionGroup className="selected-ingredients">
            {selectedIngredients.map((ingredient) => (
              <CSSTransition key={ingredient} timeout={300} classNames="bounce">
                <button
                  type="button"
                  className="selected-ingredient"
                  onClick={() => handleRemove(ingredient)}
                >
                  {ingredient}
                </button>
              </CSSTransition>
            ))}
            </TransitionGroup>
          </div>
        )
      }
      {ingredients.map((ingredient) => (
        <button
          type="button"
          className="ingredient"
          key={ingredient}
          onClick={() => handleSelect(ingredient)}
        >
          {ingredient}
        </button>
      ))}
    </div>
  );
}

export default SearchSuggestions;
