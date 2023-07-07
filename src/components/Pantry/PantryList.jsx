import React from 'react'
import PantryFilter from './PantryFilter'
import PantryItems from './PantryItems'
import PantryEmpty from './PantryEmpty'
import PantryAdd from './PantryAdd'

import { useSelector, useDispatch } from 'react-redux'

import { useFetchPantryItemsQuery } from '../../state/features/pantry/pantryService'
import { setData } from '../../state/features/pantry/pantrySlice'

import Spinner from '../Loader/Spinner'

function PantryList() {
    const [add, setAdd] = React.useState(false);
    const { pantry } = useSelector(state => state.pantry);
    const dispatch = useDispatch();

    const { data, isLoading } = useFetchPantryItemsQuery('pantryItems');

    React.useEffect(() => {
        if (data) {
            dispatch(setData(data));
        }
    }, [data, dispatch]);


    return (
        <div className="list">
            <div className="list__header">
                <h1 className="list__header--title">Pantry</h1>
                <button
                    className="list__header--btn btn-add dark"
                    onClick={() => setAdd(!add)}>
                </button>
                {add ? <PantryAdd close={() => setAdd(false)} /> : null}
            </div>

            <PantryFilter />
            
            <div className="list__items">
                {
                    isLoading
                        ? <Spinner />
                        : pantry.length > 0
                            ? <PantryItems items={pantry} />
                            : <PantryEmpty />
                }
            </div>
        </div>
    )
}

export default PantryList