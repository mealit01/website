import { createSlice } from '@reduxjs/toolkit';
import { addShoppingListItem, deleteShoppingListItem, updateShoppingListItem } from './shoppingListActions';

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
            state.shoppingList = action.payload.data;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addShoppingListItem.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addShoppingListItem.fulfilled, (state, action) => {
            state.loading = false;
            state.shoppingList = action.payload;
        });
        builder.addCase(addShoppingListItem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(deleteShoppingListItem.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteShoppingListItem.fulfilled, (state, action) => {
            state.loading = false;
            state.shoppingList = action.payload;
        });
        builder.addCase(deleteShoppingListItem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(updateShoppingListItem.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateShoppingListItem.fulfilled, (state, action) => {
            state.loading = false;
            state.shoppingList = action.payload;
        });
        builder.addCase(updateShoppingListItem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export default shoppingListSlice.reducer;
export const { setData } = shoppingListSlice.actions;

