import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API_URL;

export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    tagTypes: ['Recipes'],
    endpoints: (build) => ({
        fetchAllRecipes: build.query({
            query: ({ page = 1, limit = 10}) => ({
                url: `api/recipes?page=${page}&limit=${limit}`,
                method: 'GET'
            }),
            providesTags: (result) =>
                result.data
                    ? [...result.data.map(({ _id }) => ({ type: 'Recipes', id: _id })), { type: 'Recipes', id: 'LIST' }]
                    : [{ type: 'Recipes', id: 'LIST' }],
        }),
    })
});

export const { useFetchAllRecipesQuery } = recipesApi;