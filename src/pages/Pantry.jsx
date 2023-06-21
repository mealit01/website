import React from 'react'
import Navbar from '../components/Navbar'
import List from '../components/List/List'

function Pantry() {
  return (
    <div className="pantry">
        <Navbar />
        <List title="Pantry" />
    </div>
  )
}

export default Pantry