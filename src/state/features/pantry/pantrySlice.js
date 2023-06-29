import { createSlice } from '@reduxjs/toolkit';
import { addPantryItem, deletePantryItem, updatePantryItem } from './pantryActions';

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null;

const initialState = {
    loading: false,
    userToken,
    error: null,
    success: false,
    pantry: [],
};

const pantrySlice = createSlice({
    name: 'pantry',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.pantry = action.payload.data.ingredients;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addPantryItem.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addPantryItem.fulfilled, (state, action) => {
            state.loading = false;
            state.pantry = action.payload;
        });
        builder.addCase(addPantryItem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(deletePantryItem.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deletePantryItem.fulfilled, (state, action) => {
            state.loading = false;
            state.pantry = action.payload;
        });
        builder.addCase(deletePantryItem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(updatePantryItem.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updatePantryItem.fulfilled, (state, action) => {
            state.loading = false;
            state.pantry = action.payload;
        });
        builder.addCase(updatePantryItem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export default pantrySlice.reducer;
export const { setData } = pantrySlice.actions;

