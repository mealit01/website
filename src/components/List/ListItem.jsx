import React from 'react'

function ListItem({ item }) {
  return (
    <div className="list__item">
        <div className="list__item--title">
            <h2>{item.name}</h2>
        </div>
        <div className="list__item--body">
            <p>{item.quantity}</p>
        </div>
    </div>
  )
}

export default ListItem