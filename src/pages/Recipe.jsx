import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import img from '../assets/images/meal-rec.png'
import Navbar from '../components/Navbar'
import kcalIcon from '../assets/images/kcals.svg'
import timeIcon from '../assets/images/time.svg'
import difficultyIcon from '../assets/images/difficulty.svg'
import ingredientsIcon from '../assets/images/ings.svg'
const placeholderRecipe = {
    id: 1,
    name: 'Pasta Margaretta with soup and butterfly',
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    img: img,
    time: 30,
    ingredients: ['Chicken', 'Tomato', 'Onion', 'Garlic', 'Paprika', 'Salt', 'Pepper'],
    fav: false,
    meal: 'breakfast',
    difficulty: 'Easy',
    tags: ['easy', 'breakfast', 'healthy', 'low-carb', 'low-fat', 'low-sodium', 'low-sugar', 'low-calories'],
    nurtition: {
        calories: 300,
        fat: 20,
        carbs: 20,
        protein: 20,
        sugar: 20,
        sodium: 20,
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
                            <span className="calories">{placeholderRecipe.nurtition.calories} kcal</span>
                        </div>
                        <div className="recipe__header--info--info--ingNum">
                            <img src={ingredientsIcon} alt="Ingredients" />
                            <span className="ingNum">{placeholderRecipe.ingredients.length} ings</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recipe__body">
                <div className="recipe__body--ingredients">
                    <h3>Ingredients</h3>
                    <ul>
                        {
                            placeholderRecipe.ingredients.map((ingredient, index) => {
                                return (
                                    <li key={index}>{ingredient}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="recipe__body--steps">
                    <h3>Steps</h3>
                    <ol>
                        {
                            placeholderRecipe.steps.map((step, index) => {
                                return (
                                    <li key={index}>{step.description}</li>
                                )
                            })
                        }
                    </ol>
                </div>
                <div className="recipe__body--nutrition">
                    <h3>Nutrition</h3>
                    <div className="nutritions">
                        {
                            Object.keys(placeholderRecipe.nurtition).map((key, index) => {
                                return (
                                    <div key={index} className="nutrition">
                                        <span className="nutrition__name">{key}</span>
                                        <span className="nutrition__value">{placeholderRecipe.nurtition[key]}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Recipe