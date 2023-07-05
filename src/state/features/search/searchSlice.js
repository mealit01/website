import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchQuery: '',
    searchResults: [],
    searchFilters: [],
    allSearchFilters: [],
    searchFiltersApplied: {
        diet_type: [],
        category: [],
        summary: "",
        ingredients: [],
        cuisine: [],
        allergens: [],
    },
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },
        setSearchFilters(state, action) {
            state.searchFilters = action.payload.filters;
            state.allSearchFilters = Object.values(action.payload.filters).flat();
        },
        addFilter(state, action) {
            const filterType = action.payload.filterType;
            const filterValue = action.payload.filterValue;
            // add filter to searchFiltersApplied
            state.searchFiltersApplied[filterType].push(filterValue);
        },
        removeFilter(state, action) {
            // remove filter from searchFiltersApplied
            const filterType = action.payload.filterType;
            const filterValue = action.payload.filterValue;
            const filterIndex = state.searchFiltersApplied[filterType].indexOf(filterValue);
            state.searchFiltersApplied[filterType].splice(filterIndex, 1);
        }
    },
});

export const { setSearchQuery, addFilter, removeFilter, setSearchFilters } = searchSlice.actions;
export default searchSlice.reducer;