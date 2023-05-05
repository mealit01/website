import React from 'react';
import Review from './Review';

import person1 from '../../assets/images/person-1.png';
import person2 from '../../assets/images/person-2.png';
import person3 from '../../assets/images/person-3.png';
import person4 from '../../assets/images/person-4.png';
import person5 from '../../assets/images/person-5.png';

const reviews = [
    {
        id: 1,
        name: 'John Doe',
        img: person1,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 2,
        name: 'John Doe',
        img: person2,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 3,
        name: 'John Doe',
        img: person3,
        content: 'Lorem ipsum dolor sit amet consectetur. Quisquam, voluptatum. '
    },
    {
        id: 4,
        name: 'John Doe',
        img: person4,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. '
    },
    {
        id: 5,
        name: 'John Doe',
        img: person1,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 6,
        name: 'John Doe',
        img: person5,
        content: 'Loremectetur adipisicing elit. Quisquam, voluptatum.'
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
