import React from 'react'
import Cards from '../Card/Cards';


function Meals({ meals }) {
  return (
    <div className="day-meals">
                <div className="day-meals__meal">
                    <div className="day-meals__header breakfast">
                        <h3>Breakfast</h3>
                        <button className="day-meals__header btn-add dark" title="Add a breakfast"></button>
                    </div>
                    <Cards nav={false}/>
                </div>
                <div className="day-meals__meal">
                    <div className="day-meals__header lunch">
                        <h3>Lunch</h3>
                        <button className="day-meals__header btn-add dark" title="Add a lunch"></button>
                    </div>
                    
                </div>
                <div className="day-meals__meal">
                    <div className="day-meals__header dinner">
                        <h3>Dinner</h3>
                        <button className="day-meals__header btn-add dark" title="Add a dinner"></button>
                    </div>
                    {/* <Slider /> */}
                </div>
            </div>
  )
}

export default Meals