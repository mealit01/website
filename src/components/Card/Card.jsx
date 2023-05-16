import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';

import timeIcon from '../../assets/images/time.svg';
import difficultyIcon from '../../assets/images/difficulty.svg';
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
                <Link to={`/recipe/${item.id}`} className="meal-card__img-link">
                    <img src={item.img} alt={item.name} />
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
                            <span className="time">{item.time} mins</span>
                        </div>
                        <div className="meal-card__tags--tag">
                            <img src={difficultyIcon} alt="Difficulty" />
                            <span className="difficulty">{item.difficulty}</span>
                        </div>
                        <div className="meal-card__tags--tag">
                            <img src={caloriesIcon} alt="Calories" />
                            <span className="calories">{item.calories} kcal</span>
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
                        <p>{item.description}</p>
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
                        <Link to={`/recipe/${item.id}`} className="btn btn-dark" title="See the recipe">More info</Link>
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
}

export default Card;