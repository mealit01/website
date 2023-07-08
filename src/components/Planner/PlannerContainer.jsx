import React from 'react'
import Days from './Days'
import Meals from './Meals'

function Planner() {
  return (
    <div className="container-planner container">
        <h1>Planner</h1>
        <Days />
        <Meals />
    </div>
  )
}

export default Planner