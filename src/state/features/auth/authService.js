import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://mealit.vercel.app/api/',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.userToken;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => ({
                url: 'uesr/info',
                method: 'GET',
            }),
        }),
        updateUserDetails: builder.mutation({
            query: ({ name, email, password, confirmPassword }) => ({
                url: 'user/update',
                method: 'PUT',
                body: {
                    firstName: name.split(' ')[0],
                    lastName: name.split(' ')[1],
                    email,
                    password,
                    confirmPassword,
                },
            }),
        }),
        deleteUser: builder.mutation({
            query: () => ({
                url: 'user/delete',
                method: 'DELETE',
            }),
        }),
        forgotPassword: builder.mutation({
            query: ({ email }) => ({
                url: 'user/forgot-password',
                method: 'POST',
                body: {
                    email,
                },
            }),
        }),
        resetPassword: builder.mutation({
            query: ({ token, password, confirmPassword }) => ({
                url: 'user/reset-password',
                method: 'POST',
                body: {
                    token,
                    password,
                    confirmPassword,
                },
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'user/logout',
                method: 'POST',
            }),
        }),
    }),
});

export const { useGetUserDetailsQuery } = authApi;
