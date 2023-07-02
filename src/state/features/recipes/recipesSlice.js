import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipeById } from './recipesActions';
const initialState = {
    recipes: [],
    recipe: null,
    page: 1,
    limit: 10,
    loading: false,
    success: false,
    error: null,
};

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        setRecipes: (state, action) => {
            state.recipes = action.payload.recipes;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipeById.fulfilled, (state, action) => {
                state.recipe = action.payload.recipe;
                state.loading = false;
                state.success = true;
            })
            .addCase(fetchRecipeById.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchRecipeById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.success = false;
            });
    }
});

export const { setRecipes, setRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;