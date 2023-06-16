import React from 'react'
import Navbar from '../components/Navbar';
import PlannerContainer from '../components/Planner/PlannerContainer';

function Planner() {
  return (
    <div className="planner">
        <Navbar />
        <PlannerContainer />
    </div>
  )
}

export default Planner