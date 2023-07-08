import React from 'react'
import Card from './Card'

import { useAddBreakfastMutation, useAddLunchMutation, useAddDinnerMutation } from '../../state/features/planner/plannerService';
import { useDispatch, useSelector } from 'react-redux';

function CardsList({ cards, meal }) {
    const dispatch = useDispatch();

    const { activeDay } = useSelector(state => state.planner);

    const [addBreakfast] = useAddBreakfastMutation();
    const [addLunch] = useAddLunchMutation();
    const [addDinner] = useAddDinnerMutation();

    const handleAddToPlanner = (card) => {
        if (meal) {
            switch (meal) {
                case 'breakfast':
                    dispatch(addBreakfast({ day: activeDay, recipeId: card._id }));
                    break;
                case 'lunch':
                    dispatch(addLunch({ day: activeDay, recipeId: card._id }));
                    break;
                case 'dinner':
                    dispatch(addDinner({ day: activeDay, recipeId: card._id }));
                    break;
                default:
                    break;
            }
        }

    }

    return (
        <div className="cards-list">
            <div className="cards-list__content">
                {
                    cards?.map((card, index) => {
                        return (
                            <Card item={card} key={card._id} onClick={() => handleAddToPlanner(card)} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardsList