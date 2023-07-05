import { createSlice } from "@reduxjs/toolkit";
import { searchRecipes } from "./plannerActions";
const activeDay = new Date().toISOString().split("T")[0];

const initialState = {
  planner: {
  },
  activeDay: activeDay,
  loading: false,
  success: false,
  error: null,
  searchResults: [],
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    setDay: (state, action) => {
        const date = action.payload;
        state.planner[date] = state.planner[date] || { breakfast: [], lunch: [], dinner: [] };
        state.activeDay = date;
    },
    setBreakfast: (state, action) => {
      const { activeDay, card } = action.payload;
      console.log(action.payload);
      state.planner[activeDay] = { ...state.planner[activeDay], breakfast: [...state.planner[activeDay].breakfast, card] };
    },
    setLunch: (state, action) => {
      const { activeDay, card } = action.payload;
      state.planner[activeDay] = { ...state.planner[activeDay], lunch: [...state.planner[activeDay].lunch, card] };
    },
    setDinner: (state, action) => {
      const { activeDay, card } = action.payload;
      state.planner[activeDay] = { ...state.planner[activeDay], dinner: [...state.planner[activeDay].dinner, card] };
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
    }
});

export const {
  setDay,
  setBreakfast,
  setLunch,
  setDinner,
} = plannerSlice.actions;
export default plannerSlice.reducer;
