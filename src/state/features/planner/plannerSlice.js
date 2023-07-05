import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    planner: {
        day: '',
        breakfast: [],
        lunch: [],
        dinner: [],
    },
    loading: false,
    success: false,
    error: null,
};

const plannerSlice = createSlice({
    name: 'planner',
    initialState,
    reducers: {
        setDay: (state, action) => {
            state.planner.day = action.payload;
        },
        setBreakfast: (state, action) => {
            state.planner.breakfast = [...state.planner.breakfast, action.payload];
        },
        setLunch: (state, action) => {
            state.planner.lunch = [...state.planner.lunch, action.payload];
        },
        setDinner: (state, action) => {
            state.planner.dinner = [...state.planner.dinner, action.payload];
        }
    }
});

export const { setDay, setBreakfast, setLunch, setDinner } = plannerSlice.actions;
export default plannerSlice.reducer;