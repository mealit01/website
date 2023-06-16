import React from 'react'
import Days from './Days'
import Meals from './Meals'

import meal from '../../assets/images/meal-rec.png';
const meals = [
    {
        id: 1,
        name: 'Pasta Margaretta with soup and butterfly',
        rating: 4.5,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        img: meal,
        time: 30,
        ingredients: [ 'Chicken', 'Tomato', 'Onion', 'Garlic', 'Paprika', 'Salt', 'Pepper' ],
        difficulty: 'Easy',
        calories: 300,
    }
];


function Planner() {
  return (
    <div className="container-planner container">
        <h1>Planner</h1>
        <Days />
        <Meals meals={meals} />
    </div>
  )
}

export default Planner