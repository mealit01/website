import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchQuery: '',
    searchResults: [],
    searchFilters: [],
    searchFiltersApplied: [],
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },
        addFilter(state, action) {
            state.searchFiltersApplied.push(action.payload);
        },
        removeFilter(state, action) {
            state.searchFiltersApplied = state.searchFiltersApplied.filter((filter) => filter !== action.payload);
        }
    },
});

export const { setSearchQuery, addFilter, removeFilter } = searchSlice.actions;
export default searchSlice.reducer;