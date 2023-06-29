import React from 'react'
import Navbar from '../components/Navbar'
import List from '../components/List/List'

import { useSelector, useDispatch } from 'react-redux'
import { addShoppingListItem, deleteShoppingListItem, updateShoppingListItem } from '../state/features/shoppingList/shoppingListActions'

import { useFetchShoppingListItemsQuery } from '../state/features/shoppingList/shoppingListService'
import { setData } from "../state/features/shoppingList/shoppingListSlice";

const empty = {
  message: "Your shopping list is empty",
  action: "Add items to your shopping list",
  icon: "pantry"
}
function ShoppingList() {
  const userInfo = useSelector((state) => state.auth.userToken);
  const shoppingItems = useSelector((state) => state.shoppingList.shoppingList);
  const dispatch = useDispatch();

  const { data, isFetching } = useFetchShoppingListItemsQuery('shoppingItems', {
    pollingInterval: 900000, // 15 minutes
    skip: !userInfo,
  });

  React.useEffect(() => {
    if (data !== undefined) {
      dispatch(setData(data));
    }
  }, [dispatch, data]);

  const handleAddItem = (item) => {
    dispatch(addShoppingListItem(item));
  }

  const handleDeleteItem = (id) => {
    dispatch(deleteShoppingListItem(id));
  }

  const handleUpdateItem = (item) => {
    dispatch(updateShoppingListItem(item));
  }


  return (
    <div className="shopping-list">
        <Navbar />
        <List title="Shopping List" items={shoppingItems} handleAddItem={handleAddItem} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem} loading={isFetching} empty={empty} />
    </div>
  )
}

export default ShoppingList