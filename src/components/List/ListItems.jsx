import React from 'react'
import ListItem from './ListItem'

function ListItems({ items }) {
  return (
    <>
        {
            items?.map((item, index) => (
                <ListItem key={index} item={item} />
            ))
        }
    </>
  )
}

export default ListItems