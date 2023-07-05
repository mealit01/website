import React from 'react'
import Card from './Card'

import { setBreakfast, setLunch, setDinner } from '../../state/features/planner/plannerSlice';

import { useDispatch } from 'react-redux';

function CardsList({ cards, meal }) {
    const dispatch = useDispatch();

    const handleAddToPlanner = (card) => {
        console.log(card, meal);
        switch (meal) {
            case 'breakfast':
                dispatch(setBreakfast(card));
                break;
            case 'lunch':
                dispatch(setLunch(card));
                break;
            case 'dinner':
                dispatch(setDinner(card));
                break;
            default:
                break;
        }
    }

    return (
        <div className="cards-list">
            <div className="cards-list__content">
                {
                    cards?.map((card, index) => {
                        return (
                            <Card item={card} key={index} onClick={() => handleAddToPlanner(card)} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardsList