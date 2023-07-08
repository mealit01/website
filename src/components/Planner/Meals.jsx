import React, {useEffect} from 'react'
import Cards from '../Card/Cards';
import PlannerModal from './PlannerModal';

import { useDispatch, useSelector } from 'react-redux';
import { getDayRecipes } from '../../state/features/planner/plannerActions';
import { useRemoveBreakfastMutation,  useRemoveLunchMutation, useRemoveDinnerMutation } from '../../state/features/planner/plannerService';

function Meals() {
    const [showModal, setShowModal] = React.useState(false);
    const [meal, setMeal] = React.useState('');
    const dispatch = useDispatch();
    const { breakfast, lunch, dinner,activeDay } = useSelector(state => state.planner);

    const [removeBreakfast] = useRemoveBreakfastMutation();
    const [removeLunch] = useRemoveLunchMutation();
    const [removeDinner] = useRemoveDinnerMutation();

    const handleRemove = (recipeId) => {
        switch (meal) {
            case 'breakfast':
                dispatch(removeBreakfast({ day: activeDay, recipeId }));
                break;
            case 'lunch':
                dispatch(removeLunch({ day: activeDay, recipeId }));
                break;
            case 'dinner':
                dispatch(removeDinner({ day: activeDay, recipeId }));
                break;
            default:
                break;
        }
    }


    const handleShowModal = () => {
        setShowModal(true);
        const mealType = document.activeElement.parentElement.classList[1];
        setMeal(mealType);
    }

    useEffect(() => {
        dispatch(getDayRecipes(activeDay));
    }, [activeDay])

    return (
        <div className="day-meals">
            <div className="day-meals__meal">
                <div className="day-meals__header breakfast">
                    <h3>Breakfast</h3>
                    <button className="day-meals__header btn-add dark" title="Add a breakfast" onClick={handleShowModal}></button>
                </div>
                {
                    breakfast?.length > 0 ? <Cards nav={false} recipes={breakfast} remove={handleRemove} />
                    : <p className="day-meals__empty">No breakfast added</p>
                }
            </div>
            <div className="day-meals__meal">
                <div className="day-meals__header lunch">
                    <h3>Lunch</h3>
                    <button className="day-meals__header btn-add dark" title="Add a lunch" onClick={handleShowModal}></button>
                </div>
                {
                    lunch?.length > 0 ? <Cards nav={false} recipes={lunch} remove={handleRemove} /> : <p className="day-meals__empty">No lunch added</p>
                }
            </div>
            <div className="day-meals__meal">
                <div className="day-meals__header dinner">
                    <h3>Dinner</h3>
                    <button className="day-meals__header btn-add dark" title="Add a dinner" onClick={handleShowModal}></button>
                </div>
                {
                    dinner?.length > 0 ? <Cards nav={false} recipes={dinner} remove={handleRemove} /> : <p className="day-meals__empty">No dinner added</p>
                }
            </div>

            {showModal ? <PlannerModal close={() => setShowModal(false)} meal={meal} /> : null}
        </div>
    )
}

export default Meals