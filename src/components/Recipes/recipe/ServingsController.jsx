import React, { useState } from 'react';

function ServingsController() {
    const [servings, setServings] = useState(4);

    const increaseServings = () => {
        setServings(prevServings => prevServings + 1);
    }

    const decreaseServings = () => {
        setServings(prevServings => Math.max(prevServings - 1, 1)); // Ensure servings don't go below 1
    }

    return (
        <div className="ingredients--header--servings">
            <button className="servings__btns--btn" onClick={decreaseServings}>-</button>
            <span className="servings">
                <span className="servings__num">{servings}</span>
                servings
            </span>
            <button className="servings__btns--btn" onClick={increaseServings}>+</button>
        </div>
    );
}

export default ServingsController;