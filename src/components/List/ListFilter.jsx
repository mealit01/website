import React from 'react'

const filterPlaceholder = [
    'all',
    'meat',
    'vegetable',
    'fruit',
    'dairy',
    'grain',
    'fruit',
    'spice',
    'other',
]
function ListFilter() {
  return (
    <div className="list__filter">
        {
            filterPlaceholder.map((filter, index) => {
                return (
                    <button key={index} className="list__filter--btn">{filter}</button>
                )
            })
        }
    </div>
  )
}

export default ListFilter