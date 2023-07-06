import React from 'react'
import Navbar from '../components/Navbar'
import Shoppinglist from '../components/ShoppingList/Shoppinglist'

function ShoppingList() {
  React.useEffect(() => {
    //scroll to top
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pantry">
      <Navbar />
      <Shoppinglist />
    </div>
  )
}

export default ShoppingList