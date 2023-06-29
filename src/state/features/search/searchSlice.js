import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    success: false,
    searchResults: [],
    searchQuery: '',
    searchType: '',
    searchPage: 1,
    searchLimit: 10,
    searchTotal: 0,
    searchPages: 0,
    searchOffset: 0,
    searchSort: '',
    searchSortDirection: '',
    searchSortOptions: [
        { value: 'name', label: 'Name' },
        { value: 'created', label: 'Date Created' },
        { value: 'updated', label: 'Date Updated' },
        { value: 'difficulty', label: 'Difficulty' },
        { value: 'cookTime', label: 'Cook Time' },
        { value: 'prepTime', label: 'Prep Time' },
        { value: 'totalTime', label: 'Total Time' },
        { value: 'rating', label: 'Rating' },
        { value: 'reviews', label: 'Reviews' },
    ],
    searchSortDirectionOptions: [
        { value: 'asc', label: 'Ascending' },
        { value: 'desc', label: 'Descending' },
    ],
    searchFilters: {
        difficulty: [],
        cookTime: [],
        prepTime: [],
        totalTime: [],
        rating: [],
        reviews: [],
    },
    searchFiltersOptions: {
        difficulty: [
            { value: 'easy', label: 'Easy' },
            { value: 'medium', label: 'Medium' },
            { value: 'hard', label: 'Hard' },
        ],
        cookTime: [
            { value: '0-15', label: '0-15 minutes' },
            { value: '15-30', label: '15-30 minutes' },
            { value: '30-45', label: '30-45 minutes' },
            { value: '45-60', label: '45-60 minutes' },
            { value: '60-90', label: '60-90 minutes' },
            { value: '90-120', label: '90-120 minutes' },
            { value: '120-180', label: '120-180 minutes' },
            { value: 'more', label: 'More than 180 minutes' },
        ],
        prepTime: [
            { value: '0-15', label: '0-15 minutes' },
            { value: '15-30', label: '15-30 minutes' },
            { value: '30-45', label: '30-45 minutes' },
            { value: '45-60', label: '45-60 minutes' },
            { value: '60-90', label: '60-90 minutes' },
            { value: '90-120', label: '90-120 minutes' },
            { value: '120-180', label: '120-180 minutes' },
            { value: 'more', label: 'More than 180 minutes' },
        ],
        totalTime: [
            { value: '0-15', label: '0-15 minutes' },
            { value: '15-30', label: '15-30 minutes' },
            { value: '30-45', label: '30-45 minutes' },
            { value: '45-60', label: '45-60 minutes' },
            { value: '60-90', label: '60-90 minutes' },
            { value: '90-120', label: '90-120 minutes' },
            { value: '120-180', label: '120-180 minutes' },
            { value: 'more', label: 'More than 180 minutes' },
        ],
        rating: [
            { value: '0-1', label: '0-1 stars' },
            { value: '1-2', label: '1-2 stars' },
            { value: '2-3', label: '2-3 stars' },
            { value: '3-4', label: '3-4 stars' },
            { value: '4-5', label: '4-5 stars' },
        ],
        reviews: [
            { value: '0-10', label: '0-10 reviews' },
            { value: '10-20', label: '10-20 reviews' },
            { value: '20-30', label: '20-30 reviews' },
            { value: '30-40', label: '30-40 reviews' },
            { value: '40-50', label: '40-50 reviews' },
            { value: '50-100', label: '50-100 reviews' },
            { value: '100-200', label: '100-200 reviews' },
            { value: '200-500', label: '200-500 reviews' },
            { value: '500-1000', label: '500-1000 reviews' },
            { value: '+1000', label: 'More than 1000 reviews' },
        ],
    },
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setSearchType: (state, action) => {
            state.searchType = action.payload;
        }
    },
    extraReducers: (builder) => {
        //add search results api call here
    }
});

export const { setSearchQuery } = searchSlice.actions;
