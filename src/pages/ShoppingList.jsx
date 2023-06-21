import React from 'react'
import Navbar from '../components/Navbar'
import List from '../components/List/List'
function ShoppingList() {
  return (
    <div className="shopping-list">
        <Navbar />
        <List title="Shopping List" />
    </div>
  )
}

export default ShoppingList