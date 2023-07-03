import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API_URL;

export const userService = createApi({
    reducerPath: 'userService',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getBookmarks: builder.query({
            query: () => 'api/user/GetAllBookmarkedRecipe',
            providesTags: (result) => result?.bookmarkedRecipes?.map(({ _id }) => ({ type: 'User', id: _id })) || [{ type: 'User', id: 'LIST' }],
        }),

        toggleBookmark: builder.mutation({
            query: ({ recipeId }) => ({
                url: `api/recipe/bookmark/${recipeId}`,
                method: 'PATCH',
            }),
            invalidatesTags: (result, error, { recipeId }) => [{ type: 'User', id: recipeId }],
        }),
    }),
});


export const { useGetBookmarksQuery, useToggleBookmarkMutation } = userService;