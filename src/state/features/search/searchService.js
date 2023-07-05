import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API_URL;

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    tagTypes: ['Search'],
    endpoints: (build) => ({
        fetchSearchResults: build.query({
            query: ({ searchQuery, searchFiltersApplied }) => ({
                url: 'api/recipes/search',
                method: 'POST',
                body: {
                    "text": searchQuery,
                    "category": searchFiltersApplied.category,
                    "diet_type": searchFiltersApplied.diet_type,
                    "ingredients": searchFiltersApplied.ingredients,
                    "summary": searchFiltersApplied.summary,
                    "mode": "full_mode",
                    "no_of_recipes": 10,
                }
            }),
            providesTags: (result) => {
                const data = result.data.ingredients;
                return data
                    ? [...data.map(({ _id }) => ({ type: 'Search', id: _id })), { type: 'Search', id: 'LIST' }]
                    : [{ type: 'Search', id: 'LIST' }];
            }
        }),
        fetchFilterOptions: build.query({
            query: () => ({
                url: 'api/recipes/search/filters',
                method: 'GET'
            }),
            providesTags: (result) => {
                const data = result.data;
                return data
                    ? [...data.map(({ _id }) => ({ type: 'Search', id: _id })), { type: 'Search', id: 'LIST' }]
                    : [{ type: 'Search', id: 'LIST' }];
            }
        })
    })
});

export const { useFetchSearchResultsQuery, useFetchRecipeByIdQuery, useFetchFilterOptionsQuery } = searchApi;
