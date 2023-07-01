import { createSlice } from '@reduxjs/toolkit';

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null;

const initialState = {
    loading: false,
    userToken,
    error: null,
    success: false,
    shoppingList: [],
};

const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.shoppingList = action.payload.data.ingredients;
        }
    },
    extraReducers: (builder) => {}
});

export default shoppingListSlice.reducer;
export const { setData } = shoppingListSlice.actions;

