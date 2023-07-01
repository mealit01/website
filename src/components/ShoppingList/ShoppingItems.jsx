import React from 'react'
import ShoppingItem from './ShoppingItem'

function ShoppingItems({ items }) {
  return (
    <>
        {
            items?.map((item, index) => (
                <ShoppingItem key={index} item={item} />
            ))
        }
    </>
  )
}

export default ShoppingItems