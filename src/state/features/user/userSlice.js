import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('userToken') || null;

const initialState = {
    loading: false,
    userToken: token,
    error: null,
    success: false,
    bookmarks: [],
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setBookmarks: (state, action) => {
            state.bookmarks = action.payload.bookmarkedRecipes;
        }
    },
    extraReducers: (builder) => {}
});

export const { setBookmarks } = userSlice.actions;
export default userSlice.reducer;