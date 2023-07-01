import React from 'react'
import listEmpty from '../../assets/images/list-empty.svg'

function ShoppingEmpty() {
  return (
    <div className="list__empty">
        <div className="list__empty--icon">
            <img src={listEmpty} alt="list-empty" />
        </div>
        <div className="list__empty--message">
            <h2>Your Shoppinglist is empty</h2>
            <p>Add items to your Shopping list</p>
        </div>
    </div>
  )
}

export default ShoppingEmpty