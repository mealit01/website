import React, { useState, useEffect } from 'react'
import moment from 'moment'
import editIcon from '../../assets/images/edit-icon.svg'
import PantryEdit from './PantryEdit'


function PantryItem({ item }) {
  const [showOptions, setShowOptions] = useState(false)
  const [showEdit, setShowEdit] = useState(false)

  useEffect(() => {
    setShowOptions(false)
  }, [item])

  return (
    <div className={`list__item ${showOptions ? 'show-options' : ''}`} onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
      <div className="list__item--details">
        <div className="list__item--title">
          <div className="list__item--title--name">
            <h2>{item.name}</h2>
            {item.category && <span>{item.category}</span>}
          </div>
          {item.expiryDate && <p
            className={`list__item--title--expiry ${moment(item.expiryDate).isBefore(moment(), 'day') ?
              'expired' : ''}`}>
            {moment(item.expiryDate).fromNow('day')} left</p>}
        </div>
        <div className="list__item--body">
          <p>{item.quantity}</p>
        </div>
      </div>
      {
        showOptions && (
          <div className="list__item--options">
            <button className="btn btn-edit" onClick={() => setShowEdit(true)}>
              <img src={editIcon} alt="edit" />
            </button>
          </div>
        )
      }

      {
        showEdit && (
          <div className="list__item--edit">
            <PantryEdit item={item} close={() => setShowEdit(false)} />
          </div>
        )
      }
    </div>
  )
}

export default PantryItem