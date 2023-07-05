import React from 'react'
import Card from './Card'

import { setBreakfast, setLunch, setDinner } from '../../state/features/planner/plannerSlice';

import { useDispatch, useSelector } from 'react-redux';

function CardsList({ cards, meal }) {
    const dispatch = useDispatch();

    const { activeDay } = useSelector(state => state.planner);

    const handleAddToPlanner = (card) => {
        console.log(card, meal);
        switch (meal) {
            case 'breakfast':
                dispatch(setBreakfast({ activeDay, card }));
                break;
            case 'lunch':
                dispatch(setLunch({ activeDay, card }));
                break;
            case 'dinner':
                dispatch(setDinner({ activeDay, card }));
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