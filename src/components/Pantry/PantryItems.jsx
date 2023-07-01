import React from 'react'
import PantryItem from './PantryItem'

function PantryItems({ items }) {
  return (
    <>
        {
            items?.map((item, index) => (
                <PantryItem key={index} item={item} id={item._id} />
            ))
        }
    </>
  )
}

export default PantryItems