import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API_URL;

export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.userToken || localStorage.getItem('userToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
                return headers;
            }
            console.log(headers);
        },
    }),
    tagTypes: ['Recipes', 'Bookmark', 'User', 'Recipe'], 
    endpoints: (build) => ({
        fetchAllRecipes: build.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `api/recipes?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            providesTags: (result) =>
                result.data 
                    ? [ ...result.data.map(({ _id }) => ({ type: 'Recipe', id: _id })), { type: 'Recipes', id: 'LIST' } ]
                    : [ { type: 'Recipes', id: 'LIST' } ],
        }),
        fetchForYouRecipes: build.query({
            query: ({ page = 2, limit = 10 }) => ({
                url: `api/recipes?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            providesTags: (result) =>
                result.data
                    ? [ ...result.data.map(({ _id }) => ({ type: 'Recipe', id: _id })), { type: 'Recipes', id: 'LIST' } ]
                    : [ { type: 'Recipes', id: 'LIST' } ],
        }),
    })
});

export const { useFetchAllRecipesQuery, useFetchForYouRecipesQuery } = recipesApi;