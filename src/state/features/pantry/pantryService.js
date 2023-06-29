import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = process.env.REACT_APP_API_URL;

export const pantryApi = createApi({
    reducerPath: 'pantryApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().pantry.userToken || localStorage.getItem('userToken');
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
                return headers;
            }
        }
    }),
    endpoints: (build) => ({
        fetchPantryItems: build.query({
            query: () => ({
                url: 'api/pantry',
                method: 'GET'
            })
        }),
    })
});

export const { useFetchPantryItemsQuery } =  pantryApi;