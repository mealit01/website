import { createSlice } from "@reduxjs/toolkit";
import { searchRecipes, getDayRecipes } from "./plannerActions";

const activeDay = new Date().getDate();
const initialState = {
  days: [],
  day: '',
  activeDay: activeDay,
  dayOfWeek: '',
  breakfast: [],
  lunch: [],
  dinner: [],
  searchResults: [],
  loading: false,
  success: false,
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    setDays: (state, action) => {
      state.days = action.payload.days;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchRecipes.fulfilled, (state, action) => {
        state.searchResults = action.payload.recipes;
        state.loading = false;
        state.success = true;
        console.log(action.payload);
      })
      .addCase(searchRecipes.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(searchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      })
      .addCase(getDayRecipes.fulfilled, (state, action) => {
        state.day = action.payload.day.day
        state.dayOfWeek = action.payload.day.dayOfWeek;
        state.activeDay = action.payload.day.day;
        state.breakfast = action.payload.day.breakfast;
        state.lunch = action.payload.day.lunch;
        state.dinner = action.payload.day.dinner;
        state.loading = false;
        state.success = true;
      })
      .addCase(getDayRecipes.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getDayRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      });
  }
});

export const {
  setDays,
  setActiveDay,
  setBreakfast,
  setLunch,
  setDinner,
} = plannerSlice.actions;
export default plannerSlice.reducer;
