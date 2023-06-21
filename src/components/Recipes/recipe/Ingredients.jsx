import React from 'react'
import ServingsController from './ServingsController'

function Ingredients({ ingredients, nurtition }) {

    return (
        <div className="recipe__body--details">
            <div className="ingredients">
                <div className="ingredients--header">
                    <h3>Ingredients</h3>
                    <ServingsController />
                </div>
                <ul className="ingredients--list">
                    {
                        Object.keys(ingredients).map((key, index) => {
                            return (
                                <li key={index} className="ingredient">
                                    <span className="ingredient__name">{ingredients[key].name}</span>
                                    <span className="ingredient__amount">{ingredients[key].quantity} </span>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
            </div>
            <div className="nutrition-container">
                <h4>Nutrition per serving</h4>
                <div className="nutritions">
                    {
                        Object.keys(nurtition).map((key, index) => {
                            return (
                                <div key={index} className="nutrition">
                                    <span className="nutrition__name">{key}</span>
                                    <span className="nutrition__value">{nurtition[key]}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Ingredients