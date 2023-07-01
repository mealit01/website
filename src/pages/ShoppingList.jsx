import React from 'react'
import Navbar from '../components/Navbar'
import Shoppinglist from '../components/ShoppingList/Shoppinglist'

function ShoppingList() {
  return (
    <div className="pantry">
      <Navbar />
      <Shoppinglist />
    </div>
  )
}

export default ShoppingList