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
            query: () => ({
                url: 'api/recipes',
                method: 'GET',
                params: {
                    limit: 10,
                    page: 1
                }
            }),
            providesTags: (result) => {
                const data = result.data;
                return data
                    ? [...data.map(({ _id }) => ({ type: 'Recipes', id: _id })), { type: 'Recipes', id: 'LIST' }]
                    : [{ type: 'Recipes', id: 'LIST' }];
            }
        }),
        fetchRecipeById: build.query({
            query: (id) => ({
                url: `api/recipes/getRecipe/${id}`,
                method: 'GET'
            }),
            providesTags: (result) => {
                const data = result.data;
                return data
                    ? [{ type: 'Recipes', id: data._id }]
                    : [{ type: 'Recipes', id: 'LIST' }];
            }
        }),
    })
});

export const { useFetchAllRecipesQuery, useFetchRecipeByIdQuery } = recipesApi;