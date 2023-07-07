import { createSlice } from "@reduxjs/toolkit";
import { searchRecipes, getDayRecipes } from "./plannerActions";

const activeDay = new Date().toISOString().split("T")[0];

const initialState = {
  days: [],
  day: activeDay,
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
    setBreakfast: (state, action) => {
      state.breakfast = action.payload.day.breakfast;
    },
    setLunch: (state, action) => {
      state.lunch = action.payload.day.lunch;
    },
    setDinner: (state, action) => {
      state.dinner = action.payload.day.dinner;
    }
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
        state.day = action.payload.day;
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
  setBreakfast,
  setLunch,
  setDinner,
} = plannerSlice.actions;
export default plannerSlice.reducer;
