import React from 'react';

import ourIdea1 from '../../assets/images/our-idea1.png';
import ourIdea2 from '../../assets/images/our-idea2.png';
import ourIdea3 from '../../assets/images/our-idea3.png';

const Idea = () => {
    return (
        <div className="container our-idea">
            <div className="row">
                <div className="our-idea__img">
                    <img src={ourIdea1} alt="our-idea1" />
                </div>
                <div className="our-idea__header">
                    <h4>We make the world a better place to live </h4>
                    <p> Save time and effort with customize recipe and meal planner with what you already haveSave time and effort with customize recipe and meal planner. </p>
                </div>
            </div>

            <div className="row">
                <div className="our-idea__img">
                    <img src={ourIdea2} alt="our-idea2" />
                </div>
                <div className="our-idea__header">
                    <h4>Not knowing what to cook? No problem! </h4>
                    <p>With our new magic search, making a meal never being this easy. all you have to do is to enter your ingredients that you have and we do the rest.</p>
                </div>
            </div>

            <div className="row">
                <div className="our-idea__img">
                    <img src={ourIdea3} alt="our-idea3" />
                </div>
                <div className="our-idea__header">
                    <h4>Foucs on what matters </h4>
                    <p>Foucs on what matters and let us do the rest. We will help you to plan your meal and shopping list. </p>
                </div>
            </div>
        </div>
    );
}

export default Idea;
