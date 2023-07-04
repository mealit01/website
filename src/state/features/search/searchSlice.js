import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchQuery: '',
    searchResults: [],
    searchFilters: [],
    allSearchFilters: [],
    searchFiltersApplied: [],
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
            state.searchFiltersApplied.push(action.payload);
        },
        removeFilter(state, action) {
            state.searchFiltersApplied = state.searchFiltersApplied.filter((filter) => filter !== action.payload);
        }
    },
});

export const { setSearchQuery, addFilter, removeFilter, setSearchFilters } = searchSlice.actions;
export default searchSlice.reducer;