import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API_URL;

export const userService = createApi({
    reducerPath: 'userService',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.userToken;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
                return headers;
            }
        }
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getBookmarks: builder.query({
            query: () => 'api/user/GetAllBookmarkedRecipe',
            providesTags: (result) => result?.bookmarkedRecipes?.map(({ _id }) => ({ type: 'User', id: _id })) || [{ type: 'User', id: 'LIST' }],
        }),

        toggleBookmark: builder.mutation({
            query: (recipeId) => ({
                url: `api/recipes/bookmark/${recipeId}`,
                method: 'PATCH',
            }),
            invalidatesTags: (result, error, { recipeId }) => [{ type: 'User', id: recipeId }],
        }),
    }),
});


export const { useGetBookmarksQuery, useToggleBookmarkMutation } = userService;