import React from 'react'

function ListEmpty({ empty }) {
  return (
    <div className="list__empty">
        <div className="list__empty--icon">
            <img src={`./assets/images/${empty.icon}.svg`} alt={empty.icon} />
        </div>
        <div className="list__empty--message">
            <h2>{empty.message}</h2>
            <p>{empty.action}</p>
        </div>
    </div>
  )
}

export default ListEmpty