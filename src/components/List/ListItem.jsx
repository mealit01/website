import React, { useState, useEffect } from 'react'

import editIcon from '../../assets/images/edit-icon.svg'
import ListEdit from './ListEdit'
function ListItem({ item, deleteItem, editItem }) {
  const [showOptions, setShowOptions] = useState(false)
  const [showEdit, setShowEdit] = useState(false)

  useEffect(() => {
    setShowOptions(false)
  }, [item])

  return (
    <div className={`list__item ${showOptions ? 'show-options' : ''}`} onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
      <div className="list__item--details">
        <div className="list__item--title">
          <h2>{item.name}</h2>
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
            <button className="btn btn-delete" onClick={() => deleteItem(item.id)}>D</button>
          </div>
        )
      }

      {
        showEdit && (
          <div className="list__item--edit">
            <ListEdit item={item} close={() => setShowEdit(false)} editItem={editItem} />
          </div>
        )
      }
    </div>
  )
}

export default ListItem