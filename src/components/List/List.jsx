import React from 'react'
import ListFilter from './ListFilter'
import ListItems from './ListItems'
import ListEmpty from './ListEmpty'
import ListAdd from './ListAdd'

import Spinner from '../Loader/Spinner'

function List({ title, items, handleDeleteItem, handleUpdateItem, handleAddItem, empty , loading, addForm }) {
    const [add, setAdd] = React.useState(false);

    return (
        <div className="list">
            <div className="list__header">
                <h1 className="list__header--title">{title}</h1>
                <button className="list__header--btn btn-add dark" onClick={() => setAdd(!add)}></button>
                {add ? <ListAdd title={title} handleAddItem={handleAddItem} addForm={addForm} close={() => setAdd(false)} /> : null}
            </div>
            {title === "Pantry" && items.length > 0 ? <ListFilter /> : null }
            <div className="list__items">
                {
                    loading ? <Spinner /> : items.length > 0 ? <ListItems items={items} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem} /> : <ListEmpty empty={empty} />
                }
            </div>
        </div>
    )
}

export default List