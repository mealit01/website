import React from 'react'
import Navbar from '../components/Navbar'
import PantryList from '../components/Pantry/PantryList'

function Pantry() {
  
  return (
    <div className="pantry">
      <Navbar />
      <PantryList />
    </div>
  )
}

export default Pantry