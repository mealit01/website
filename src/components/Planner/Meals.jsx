import React from 'react'
import Cards from '../Card/Cards';
import PlannerModal from './PlannerModal';

function Meals() {
    const [showModal, setShowModal] = React.useState(false);
    const [meal, setMeal] = React.useState('');
    const handleShowModal = () => {
        setShowModal(true);
        const mealType = document.activeElement.parentElement.parentElement.classList[1];
        setMeal(mealType);
    }

    return (
        <div className="day-meals">
            <div className="day-meals__meal">
                <div className="day-meals__header breakfast">
                    <h3>Breakfast</h3>
                    <button className="day-meals__header btn-add dark" title="Add a breakfast" onClick={handleShowModal}></button>
                </div>
                <Cards nav={false} />
            </div>
            <div className="day-meals__meal">
                <div className="day-meals__header lunch">
                    <h3>Lunch</h3>
                    <button className="day-meals__header btn-add dark" title="Add a lunch" onClick={handleShowModal}></button>
                </div>
                <Cards nav={false} />
            </div>
            <div className="day-meals__meal">
                <div className="day-meals__header dinner">
                    <h3>Dinner</h3>
                    <button className="day-meals__header btn-add dark" title="Add a dinner" onClick={handleShowModal}></button>
                </div>
                <Cards nav={false} />
            </div>

            {showModal ? <PlannerModal close={() => setShowModal(false)} meal={meal} /> : null}
        </div>
    )
}

export default Meals