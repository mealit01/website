import React from 'react'

const filterPlaceholder = [
    'all',
    'meat',
    'vegetables & fruits',
    'dairy',
    'grains & nuts',
    'spices',
    'sauces & condiments',
    'beverages',
    'snacks',
    'other',
]
function PantryFilter() {

  return (
    <div className="list__filter">
        {
            filterPlaceholder.map((item, index) => {
                return (
                    <button key={index} className={`list__filter--btn }`}>{item}</button>
                )
            })
        }
    </div>
  )
}

export default PantryFilter