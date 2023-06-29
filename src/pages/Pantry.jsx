import React from 'react'
import Navbar from '../components/Navbar'
import List from '../components/List/List'
import * as Yup from 'yup'

import { useSelector, useDispatch } from 'react-redux'
import { addPantryItem, deletePantryItem, updatePantryItem } from '../state/features/pantry/pantryActions'

import { useFetchPantryItemsQuery } from '../state/features/pantry/pantryService'
import { setData } from "../state/features/pantry/pantrySlice";

const pantryEmpty = {
  message: "Your pantry is empty",
  action: "Add items to your pantry",
  icon: "pantry"
}

const addForm = {
  name: `<input type="text" name="name" id="name" placeholder="Name" />`,
  quantity: `<input type="number" name="quantity" id="quantity" placeholder="Quantity" />`,
  expiration: `<input type="date" name="expiration" id="expiration" />`,
  category: `
    <option value="" disabled selected>Select a category</option>
    <option value="Baking">Baking</option>
    <option value="Beverages">Beverages</option>
    <option value="Bread/Bakery">Bread/Bakery</option>
    <option value="Canned/Jarred Goods">Canned/Jarred Goods</option>
    <option value="Dairy">Dairy</option>
    <option value="Dry/Baking Goods">Dry/Baking Goods</option>
    <option value="Frozen Foods">Frozen Foods</option>
    <option value="Meat">Meat</option>
    <option value="Produce">Produce</option>
  `
}


function Pantry() {
  const userInfo = useSelector((state) => state.auth.userToken);
  const pantryItems = useSelector((state) => state.pantry.pantry);
  const dispatch = useDispatch();

  const { data, isFetching } = useFetchPantryItemsQuery('pantryItems', {
    pollingInterval: 900000, // 15 minutes
    skip: !userInfo,
  });

  React.useEffect(() => {
    if (data !== undefined) {
      dispatch(setData(data));
    }
  }, [dispatch, data]);


  const handleAddItem = (item) => {
    dispatch(addPantryItem(item));
  }

  const handleDeleteItem = (id) => {
    dispatch(deletePantryItem(id));
  }

  const handleUpdateItem = (item) => {
    dispatch(updatePantryItem(item));
  }

  return (
    <div className="pantry">
      <Navbar />
      <List
        title="Pantry"
        items={pantryItems}
        empty={pantryEmpty}
        handleAddItem={handleAddItem}
        handleDeleteItem={handleDeleteItem}
        handleUpdateItem={handleUpdateItem}
        loading={isFetching}
        addForm={addForm}
      />
    </div>
  )
}

export default Pantry