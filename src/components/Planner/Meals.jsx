import React from 'react'
import Cards from '../Card/Cards';
import PlannerModal from './PlannerModal';

import { setBreakfast, setLunch, setDinner } from '../../state/features/planner/plannerSlice';
import { useDispatch, useSelector } from 'react-redux';

function Meals() {
    const [showModal, setShowModal] = React.useState(false);
    const [meal, setMeal] = React.useState('');

    const { planner } = useSelector(state => state.planner);

    const handleShowModal = () => {
        setShowModal(true);
        const mealType = document.activeElement.parentElement.classList[1];
        setMeal(mealType);
    }

    return (
        <div className="day-meals">
            <div className="day-meals__meal">
                <div className="day-meals__header breakfast">
                    <h3>Breakfast</h3>
                    <button className="day-meals__header btn-add dark" title="Add a breakfast" onClick={handleShowModal}></button>
                </div>
                <Cards nav={false} recipes={planner.breakfast} />
            </div>
            <div className="day-meals__meal">
                <div className="day-meals__header lunch">
                    <h3>Lunch</h3>
                    <button className="day-meals__header btn-add dark" title="Add a lunch" onClick={handleShowModal}></button>
                </div>
                <Cards nav={false} recipes={planner.lunch} />
            </div>
            <div className="day-meals__meal">
                <div className="day-meals__header dinner">
                    <h3>Dinner</h3>
                    <button className="day-meals__header btn-add dark" title="Add a dinner" onClick={handleShowModal}></button>
                </div>
                <Cards nav={false} recipes={planner.dinner} />
            </div>

            {showModal ? <PlannerModal close={() => setShowModal(false)} meal={meal} /> : null}
        </div>
    )
}

export default Meals