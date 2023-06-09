import { createSlice } from '@reduxjs/toolkit';
import { signup, login, updateUserDetails, forgotPassword, resetPassword, deleteAccount } from './authActions';

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null;

const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    loading: false,
    userInfo,
    userToken,
    error: null,
    success: false,
    resetPassword: false,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => { 
            state.userInfo = action.payload.data || localStorage.getItem('userInfo');
        },
        logout: (state) => {
            state.userInfo = null;
            state.userToken = null;
            localStorage.removeItem('userToken');
            localStorage.removeItem('userInfo');
            state.error = null;
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signup.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(signup.fulfilled, (state, action) => {
            state.loading = false;
            state.userToken = action.payload.token;
            state.userInfo = action.payload.userInfo;
        });
        builder.addCase(signup.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.userToken = action.payload.token;
            state.userInfo = action.payload.userInfo;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(updateUserDetails.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateUserDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            const { firstName, lastName, email } = action.payload.data.user;
            state.userInfo = { firstName, lastName, email };
            localStorage.setItem('userInfo', JSON.stringify({ firstName, lastName, email }));
        });
        builder.addCase(updateUserDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(forgotPassword.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(forgotPassword.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.resetPassword = true;
        }
        );
        builder.addCase(forgotPassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );
        builder.addCase(resetPassword.pending, (state) => {
            state.loading = true;
        }
        );
        builder.addCase(resetPassword.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.resetPassword = false;
        }
        );
        builder.addCase(resetPassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.resetPassword = false;
        }
        );
        builder.addCase(deleteAccount.pending, (state) => {
            state.loading = true;
        }
        );
        builder.addCase(deleteAccount.fulfilled, (state, action) => {
            state.loading = false;
            state.userToken = null;
            state.userInfo = null;
        }
        );
        builder.addCase(deleteAccount.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );
    },
});

export const { logout, setLogin, setCredentials } = authSlice.actions;
export default authSlice.reducer;