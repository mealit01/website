import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchQuery: '',
    searchResults: [],
    searchFilters: [],
    allSearchFilters: [],
    searchFiltersApplied: {
        diet_type: "",
        category: "",
        ingredients: "",
        cuisine: "",
        allergens: "",
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
            state.allSearchFilters = Object.values(action.payload.filters);
        },
        addFilter(state, action) {
            const filterType = action.payload.filterType;
            const filterValue = action.payload.filterValue;
            // add filter to searchFiltersApplied
            state.searchFiltersApplied[filterType] = state.searchFiltersApplied[filterType].concat(filterValue + ", ");
            console.log(state.searchFiltersApplied[filterType]);
        },
        addIngredientFilter(state, action) {
            const ingredient = action.payload;
            if (state.searchFiltersApplied.ingredients.includes(ingredient)) {
                return;
            }
            state.searchFiltersApplied.ingredients = state.searchFiltersApplied.ingredients.concat(action.payload + ", ");
        },
        removeFilter(state, action) {
            // remove filter from searchFiltersApplied
            const filterType = action.payload.filterType;
            const filterValue = action.payload.filterValue;
            //loop through searchFiltersApplied[filterType] string and remove filterValue
            const filterValueIndex = state.searchFiltersApplied[filterType].indexOf(filterValue);
            const filterValueLength = filterValue.length;
            const filterValueIndexPlusLength = filterValueIndex + filterValueLength;
            
            state.searchFiltersApplied[filterType] = state.searchFiltersApplied[filterType].substring(0, filterValueIndex) + state.searchFiltersApplied[filterType].substring(filterValueIndexPlusLength + 2);
            console.log(state.searchFiltersApplied[filterType]);
        },
        setSearchResults(state, action) {
            state.searchResults = action.payload.data;
        }
    },
});

export const { setSearchQuery, addFilter, removeFilter, setSearchFilters, setSearchResults, addIngredientFilter } = searchSlice.actions;
export default searchSlice.reducer;