import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import img from '../assets/images/meal-rec.png'
import Navbar from '../components/Navbar'
import kcalIcon from '../assets/images/kcals.svg'
import timeIcon from '../assets/images/time.svg'
import difficultyIcon from '../assets/images/difficulty.svg'
import ingredientsIcon from '../assets/images/ings.svg'
import Ingredients from '../components/Recipes/recipe/Ingredients'
import Steps from '../components/Recipes/recipe/Steps'

const placeholderRecipe = {
    id: 1,
    name: 'Pasta Margaretta with soup and butterfly',
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    img: img,
    time: 30,
    //name, quantity
    ingredients: {
        1: {
            id: 1,
            name: 'Flour',
            quantity: '1 cup',
        },
        2: {
            id: 2,
            name: 'Baking powder',
            quantity: '1 tsp',
        },
        3: {
            id: 3,
            name: 'Baking soda',
            quantity: '1/2 tsp',
        },
        4: {
            id: 4,
            name: 'Salt',
            quantity: '1/2 tsp',
        }
    },
    fav: false,
    meal: 'breakfast',
    difficulty: 'Easy',
    tags: ['easy', 'breakfast', 'healthy', 'low-carb', 'low-fat', 'low-sodium', 'low-sugar', 'low-calories'],
    nurtition: {
        calories: '300kcal',
        fat: '20g',
        carbs: '20g',
        protein: '20g',
        sugar: '20g',
        sodium: '20g',
    },
    steps: [
        {
            id: 1,
            description: 'Preheat your oven at 180 degree celcius and line your cupcake tray with cupcake liners.',
        },
        {
            id: 2,
            description: 'In a bowl, add flour, baking powder, baking soda, salt and mix well.',
        },
        {
            id: 3,
            description: 'In another bowl, add butter and sugar and mix well.',
        },
        {
            id: 4,
            description: 'Add vanilla essence and mix well.',
        },
        {
            id: 5,
            description: 'Add egg and mix well.',
        },
        {
            id: 6,
            description: 'Add milk and mix well.',
        },
        {
            id: 7,
            description: 'Add the dry ingredients to the wet ingredients and mix well.',
        }
    ]
}

function Recipe() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="recipe">
            <Navbar />
            <div className="recipe__header">
                <div className="recipe__header--back">
                    <button className="close-btn" onClick={handleBack}>
                      go back
                    </button>
                </div>
                <div className="recipe__header--img">
                    <img src={placeholderRecipe.img} alt={placeholderRecipe.name} />
                </div>
                <div className="recipe__header--info">
                    <div className="recipe__header--info--title">
                        <h3>{placeholderRecipe.name}</h3>
                    </div>
                    <div className="recipe__header--info--description">
                        <p>{placeholderRecipe.description}</p>
                    </div>
                    <div className="recipe__header--info--tags">
                        {
                            placeholderRecipe.tags.map((tag, index) => {
                                return (
                                    <span key={index} className="tag">{tag}</span>
                                )
                            })
                        }
                    </div>

                    <div className="recipe__header--info--rating">
                        <span className="rating">4.5k people love this</span>
                    </div>

                    <div className="recipe__header--info--info">
                        <div className="recipe__header--info--info--time">
                            <img src={timeIcon} alt="Time" />
                            <span className="time">{placeholderRecipe.time} mins</span>
                        </div>
                        <div className="recipe__header--info--info--difficulty">
                            <img src={difficultyIcon} alt="Difficulty" />
                            <span className="difficulty">{placeholderRecipe.difficulty}</span>
                        </div>
                        <div className="recipe__header--info--info--calories">
                            <img src={kcalIcon} alt="Calories" />
                            <span className="calories">{placeholderRecipe.nurtition.calories} </span>
                        </div>
                        <div className="recipe__header--info--info--ingNum">
                            <img src={ingredientsIcon} alt="Ingredients" />
                            <span className="ingNum">{Object.keys(placeholderRecipe.ingredients).length} ings</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recipe__body">
                <Ingredients ingredients={placeholderRecipe.ingredients} nurtition={placeholderRecipe.nurtition} steps={placeholderRecipe.steps} />
                <Steps steps={placeholderRecipe.steps} />
            </div>
        </div>
    )
}



export default Recipe