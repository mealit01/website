import { createSlice } from '@reduxjs/toolkit';
import { signup, login } from './authActions';

const userToken = localStorage.getItem('userToken') 
    ? localStorage.getItem('userToken')
    : null;

const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
        },
        logout : (state) => {
            state.userInfo = null;
            state.userToken = null;
            state.loading = false;
            state.error = null;
            localStorage.removeItem('userToken');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signup.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(signup.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        });
        builder.addCase(signup.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        }
        );
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.userInfo = action.payload;
            state.userToken = action.payload.userToken;
        }
        );
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );
    }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;