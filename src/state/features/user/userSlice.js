import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('userToken') || null;

const initialState = {
    loading: false,
    userToken: token,
    error: null,
    success: false,
    pantry: [],
    shoppingList: [],
    bookmarks: [],
    planner: [],
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userToken = action.payload.token;
        }
    },
    extraReducers: (builder) => {}
});

export const { setCredentials } = userSlice.actions;