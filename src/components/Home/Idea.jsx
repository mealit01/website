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
                    <h4>We're shaping a more sustainable and enjoyable culinary world.</h4>
                    <p> MealIT goes beyond enhancing your kitchen experience to promoting a sustainable world. By reducing food waste via intelligent meal planning and customized recipes, we champion efficient use of resources and a greener lifestyle.</p>
                </div>
            </div>

            <div className="row">
                <div className="our-idea__img">
                    <img src={ourIdea2} alt="our-idea2" />
                </div>
                <div className="our-idea__header">
                    <h4>Unsure about your next culinary creation?</h4>
                    <p>Overcome the 'What to cook?' dilemma with MealIT. Our app transforms your available ingredients into delicious meals, fostering kitchen creativity and eliminating uncertainty.</p>
                </div>
            </div>

            <div className="row">
                <div className="our-idea__img">
                    <img src={ourIdea3} alt="our-idea3" />
                </div>
                <div className="our-idea__header">
                    <h4>Focus on What Matters</h4>
                    <p>MealIT streamlines meal planning and organization, enabling you to focus on the joy of cooking and sharing your culinary creations.</p>
                </div>
            </div>
        </div>
    );
}

export default Idea;
