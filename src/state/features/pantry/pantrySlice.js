import { createSlice } from '@reduxjs/toolkit';

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState = {
    userToken,
    pantry: [],
    allPantry: [],
};

const pantrySlice = createSlice({
    name: 'pantry',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.pantry = action.payload.data.ingredients;
            state.allPantry = action.payload.data.ingredients;
        },
        setFilter: (state, action) => {
            if (action.payload === 'all') {
                state.pantry = state.allPantry;
            }
            else {
                state.pantry = state.allPantry.filter(ingredient => ingredient.category === action.payload);
            }
        }  
    },
});

export default pantrySlice.reducer;
export const { setData } = pantrySlice.actions;