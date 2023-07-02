import React from 'react'

function Ingredients({ recipe }) {
    const [nurtition, setNurtition] = React.useState(null);
    
    React.useEffect(() => {
        if(recipe){
            const nutrient = {
                calories: recipe.calories,
                carbohydrates: recipe.carbohydrates,
                sugars: recipe.sugars,
                fat: recipe.fat,
                protein: recipe.protein,
                sodium: recipe.sodium,
                calcium: recipe.calcium,
                iron: recipe.iron,
                magnesium: recipe.magnesium,
                potassium: recipe.potassium,
            };
            setNurtition(nutrient);
        }
    }, [setNurtition, recipe]);
    return (
        <div className="recipe__body--details">
            <div className="ingredients">
                <div className="ingredients--header">
                    <h3>Ingredients</h3>
                </div>
                <ul className="ingredients--list">
                    {recipe.ingredients.length > 0 && (

                        //array of strings
                        recipe.ingredients.map((ingredient, index) => {
                            return (
                                <li key={index} className="ingredient">
                                    <span className="ingredient__name">{ingredient}</span>
                                </li>
                            )
                        })

                    )}
                </ul>
            </div>
            <div className="nutrition-container">
                <h4>Nutrition per serving</h4>
                <div className="nutritions">
                    {
                        nurtition && (
                        Object.keys(nurtition).map((key, index) => {
                            return (
                                <div key={index} className="nutrition">
                                    <span className="nutrition__name">{key}</span>
                                    <span className="nutrition__value">{nurtition[key]}</span>
                                </div>
                            )
                        })
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Ingredients