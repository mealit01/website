import React from 'react'
import ShoppingItems from './ShoppingItems'
import ShoppingEmpty from './ShoppingEmpty'
import ShoppingAdd from './ShoppingAdd'

import { useSelector, useDispatch } from 'react-redux'

import { useFetchShoppingListItemsQuery } from '../../state/features/shoppingList/shoppingListService'
import { setData } from '../../state/features/shoppingList/shoppingListSlice'

import Spinner from '../Loader/Spinner'

function Shoppinglist(){
    const [add, setAdd] = React.useState(false);
    
    const { loading, shoppingList } = useSelector(state => state.shoppingList);
    const dispatch = useDispatch();

    const { data } = useFetchShoppingListItemsQuery('shoppingListItems');

    React.useEffect(() => {
        if (data) {
            dispatch(setData(data));
        }
    }, [data, dispatch]);

    return (
        <div className="list">
            <div className="list__header">
                <h1 className="list__header--title"> Shopping List</h1>
                <button className="list__header--btn btn-add dark" onClick={() => setAdd(!add)}></button>
                {add ? <ShoppingAdd close={() => setAdd(false)} /> : null }
            </div>
            <div className="list__items">
                {
                    loading ? <Spinner /> : shoppingList.length > 0 ? <ShoppingItems items={shoppingList} /> : <ShoppingEmpty />
                }
            </div>
        </div>
    )
}

export default Shoppinglist