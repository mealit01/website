import React from 'react';
import Review from './Review';

import person1 from '../../../assets/images/person-1.png';
import person2 from '../../../assets/images/person-2.png';
import person3 from '../../../assets/images/person-3.png';
import person4 from '../../../assets/images/person-4.png';
import person5 from '../../../assets/images/person-5.png';

const reviews = [
    {
        id: 1,
        name: 'John Doe',
        img: person1,
        content: 'MealIT is perfect for a beginner cook like me. I love how it suggests recipes based on what I have. It\'s like a fun culinary adventure every time I open the app!'
    },
    {
        id: 2,
        name: 'John Doe',
        img: person2,
        content: 'I love how Mealit helps me utilize my pantry items. Saving recipes and creating a shopping list is easy and convenient.'
    },
    {
        id: 3,
        name: 'John Doe',
        img: person3,
        content: 'Mealit simplifies meal planning and recipe ideas. The pantry feature is great for tracking what I have.'
    },
    {
        id: 4,
        name: 'John Doe',
        img: person4,
        content: 'Mealit has transformed cooking for my family. The recipe recommendations are spot-on, and the integrated shopping list is a lifesaver.'
    },
    {
        id: 5,
        name: 'John Doe',
        img: person1,
        content: 'I can\'t imagine my kitchen without Mealit! It makes cooking easier. The recipe suggestions are great, and the shopping list feature is brilliant. The planner is a game-changer'
    },
    {
        id: 6,
        name: 'John Doe',
        img: person5,
        content: 'Mealit has made cooking enjoyable. The recipe recommendations are fantastic!'
    }
];

const WhatPeopleThink = () => {
    return (
        <div className="what-people-think container">
            <div className="what-people-think__title">
                <h2>What people say about us</h2>
            </div>
            {reviews.map((item) => {
                return <Review key={item.id} item={item} />;
            })}
        </div>
    );
}

export default WhatPeopleThink;
