import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';

import timeIcon from '../../assets/images/time.svg';
import categoryIcon from '../../assets/images/catagory.svg';
import caloriesIcon from '../../assets/images/kcals.svg';
import ingredientsIcon from '../../assets/images/ings.svg';



const Card = ({ item }) => {
    const [show, setShow] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleMouseEnter = () => {
        setShow(true);
    };

    const handleMouseLeave = () => {
        setShow(false);
    };

    const handleSave = () => {
        setSaved(!saved);
    };

    return (
        <div className="meal-card">
            <div className={`meal-card__save ${saved ? 'saved' : ''}`} onClick={handleSave}>
                <button className="btn-save" title="Save" onClick={handleSave} />
            </div>
            <div className="meal-card__img-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link to={`/recipes/${item._id}`} className="meal-card__img-link">
                    <img src={item.imageUrl} alt={item.name} />
                </Link>
                <CSSTransition
                    in={show}
                    timeout={300}
                    classNames="card"
                    unmountOnExit
                >
                    <div className="meal-card__tags">
                        <div className="meal-card__tags--tag">
                            <img src={timeIcon} alt="Time" />
                            <span className="time">{item.preparation_time || item.cooking_time} </span>
                        </div>
                        <div className="meal-card__tags--tag">
                            <img src={categoryIcon} alt="Category" />
                            <span className="difficulty">{item.category}</span>
                        </div>
                        <div className="meal-card__tags--tag">
                            <img src={caloriesIcon} alt="Calories" />
                            <span className="calories">{item.calories.toFixed(0)} kcal</span>
                        </div>
                        <div className="meal-card__tags--tag">
                            <img src={ingredientsIcon} alt="Ingredients" />
                            <span className="ingNum">{item.ingredients.length} ings</span>
                        </div>
                    </div>
                </CSSTransition>
            </div>

            <div className="meal-card__info">
                <div className="meal-card__info--title">
                    <h3>{item.name}</h3>
                </div>
                <CSSTransition
                    in={show}
                    timeout={300}
                    classNames="card"
                    unmountOnExit
                >
                    <div className="meal-card__info--description">
                        <p>{item.summary}</p>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={!show}
                    timeout={300}
                    classNames="card"
                    unmountOnExit
                >
                    <div className="meal-card__info--rating">
                        <span className="rating">{item.rating}</span>
                        <Link to={`/recipes/${item._id}`} className="btn btn-dark" title="See the recipe">More info</Link>
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
}

export default Card;