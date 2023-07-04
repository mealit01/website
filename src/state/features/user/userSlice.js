import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    bookmarks: [],
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.bookmarks = action.payload.bookmarkedRecipes;
        }
    }
});

export default userSlice.reducer;
export const { setData } = userSlice.actions;