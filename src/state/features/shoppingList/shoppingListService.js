import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = process.env.REACT_APP_API_URL;

export const shoppingListApi = createApi({
    reducerPath: 'shoppingListApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().shoppingList.userToken || localStorage.getItem('userToken');
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
                return headers;
            }
        }
    }),
    endpoints: (build) => ({
        fetchShoppingListItems: build.query({
            query: () => ({
                url: 'api/shopping/',
                method: 'GET'
            })
        }),
    })
});

export const { useFetchShoppingListItemsQuery } =  shoppingListApi;