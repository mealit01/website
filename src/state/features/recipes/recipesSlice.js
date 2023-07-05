import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipeById, fetchMoreRecipes, fetchRecipesBySearch } from './recipesActions';

const initialState = {
    recipes: [],
    forYouRecipes: [],
    recipe: null,
    page: 1,
    limit: 10,
    loading: false,
    success: false,
    error: null,
    search: '',
    searchResults: [],
};

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        setRecipes: (state, action) => {
            state.recipes = action.payload.recipes;
        },
        setForYouRecipes: (state, action) => {
            state.forYouRecipes = action.payload.recipes;
        },
        nextPage: (state) => {
            state.page += 1;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        }
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
            })
            .addCase(fetchMoreRecipes.fulfilled, (state, action) => {
                state.recipes = [...state.recipes, ...action.payload.recipes];
                state.loading = false;
                state.success = true;
            })
            .addCase(fetchMoreRecipes.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchMoreRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.success = false;
            })
            .addCase(fetchRecipesBySearch.fulfilled, (state, action) => {
                state.searchResults = action.payload.recipes;
                state.loading = false;
                state.success = true;
            })
            .addCase(fetchRecipesBySearch.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchRecipesBySearch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.success = false;
            }
        );
    }
});

export const { setRecipes, nextPage, setForYouRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;