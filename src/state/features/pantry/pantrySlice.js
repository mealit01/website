import { createSlice } from '@reduxjs/toolkit';

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState = {
    userToken,
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
});

export default pantrySlice.reducer;
export const { setData } = pantrySlice.actions;