import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
    const dispatch = useDispatch();
    const [filter, setFilter] = React.useState('all');

    const handleFilter = (filter) => {
        dispatch({ type: 'pantry/setFilter', payload: filter });
        setFilter(filter);
    }


  return (
    <div className="list__filter">
        {
            filterPlaceholder.map((item, index) => {
                return (
                    <button key={index} className={`list__filter--btn ${filter === item ? 'active' : ''}`} onClick={() => handleFilter(item)}>{item}</button>
                )
            })
        }
    </div>
  )
}

export default PantryFilter