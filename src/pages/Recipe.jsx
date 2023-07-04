import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import categoryIcon from '../assets/images/catagory.svg'
import ingredientsIcon from '../assets/images/ings.svg'
import kcalIcon from '../assets/images/kcals.svg'
import timeIcon from '../assets/images/time.svg'
import Spinner from '../components/Loader/Spinner'
import Navbar from '../components/Navbar'
import Ingredients from '../components/Recipes/recipe/Ingredients'
import Steps from '../components/Recipes/recipe/Steps'

import { fetchRecipeById } from '../state/features/recipes/recipesActions'
import { useToggleBookmarkMutation } from '../state/features/user/userService'
function Recipe() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [tags, setTags] = useState([]);
    const [saved, setSaved] = useState(false);

    const recipeId = location.pathname.split('/')[2];
    const { recipe, loading } = useSelector((state) => state.recipes);
    const [toggleBookmark] = useToggleBookmarkMutation();
    
    useEffect(() => {
        dispatch(fetchRecipeById(recipeId));
    }, [dispatch, recipeId]);

    useEffect(() => {
        if (recipe) {
            const dietTypes = recipe.diet_type;
            const cuisines = recipe.cuisine === 'unknown' ? [] : [recipe.cuisine];
            const categories = recipe.category;
            const tags = [...dietTypes, cuisines, categories].flat();

            setTags(tags);
        }
    }, [recipe, setTags]);

    const handleSave = async () => {
        await toggleBookmark(recipeId);
        setSaved(!saved);
    };

    const handleBack = () => {
        //if there's a previous page, go back to it, otherwise go to home
        if (location.state && location.state.from) {
            navigate(location.state.from);
        }
        else {
            navigate('/');
        }
    }

    return (
        <div className="recipe">
            <Navbar />
            {loading ? (
                <Spinner />
            ) : !loading && recipe ? (
                <>
                    <div className="recipe__header">
                        <div className="recipe__header--back">
                            <button className="close-btn" onClick={handleBack}>
                                Go back
                            </button>
                        </div>
                        <div className="recipe__header--img">
                            <div className={`save ${recipe.bookmarked ? 'saved' : ''}`}>
                                <button className="btn-save" title="Save" onClick={handleSave} />
                            </div>
                            <img src={recipe.imageUrl} alt={recipe.name} />
                        </div>
                        <div className="recipe__header--info">
                            <div className="recipe__header--info--title">
                                <h3>{recipe.name}</h3>
                            </div>
                            <div className="recipe__header--info--description">
                                <p>{recipe.summary}</p>
                            </div>
                            <div className="recipe__header--info--tags">
                                {tags.map((tag, index) => {
                                    return (
                                        <span key={index} className="tag">
                                            {tag}
                                        </span>
                                    );
                                })}
                            </div>

                            <div className="recipe__header--info--rating">
                                <span className="rating">{recipe.rating} / 5</span>
                            </div>

                            <div className="recipe__header--info--info">
                                <div className="recipe__header--info--info--time">
                                    <img src={timeIcon} alt="Time" />
                                    <span className="time">{recipe.cooking_time}</span>
                                </div>
                                <div className="recipe__header--info--info--difficulty">
                                    <img src={categoryIcon} alt="Difficulty" />
                                    <span className="difficulty">{recipe.category}</span>
                                </div>
                                <div className="recipe__header--info--info--calories">
                                    <img src={kcalIcon} alt="Calories" />
                                    <span className="calories">{recipe.calories.toFixed(0)} kcal</span>
                                </div>
                                <div className="recipe__header--info--info--ingNum">
                                    <img src={ingredientsIcon} alt="Ingredients" />
                                    <span className="ingNum">{recipe.ingredients.length} Ingredients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recipe__body">
                        <Ingredients recipe={recipe} />
                        <Steps steps={recipe.directions} />

                    </div>
                </>
            ) : (
                <p>Error loading Recipe</p>
            )}
        </div>
    );
}

export default Recipe;