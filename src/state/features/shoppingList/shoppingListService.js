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
    tagTypes: ['ShoppingList'],
    endpoints: (build) => ({
        fetchShoppingListItems: build.query({
            query: () => ({
                url: 'api/shopping/',
                method: 'GET'
            }),
            providesTags: (result) => {
                const data = result.data.ingredients;
                return data
                    ? [...data.map(({ _id }) => ({ type: 'ShoppingList', id: _id })), { type: 'ShoppingList', id: 'LIST' }]
                    : [{ type: 'ShoppingList', id: 'LIST' }];
            }
        }),
        // add
        addShoppingListItem: build.mutation({
            query: ({ name, quantity }) => ({
                url: 'api/shopping/add',
                method: 'POST',
                body: {
                    name,
                    quantity
                }
            }),
            //after add, refetch shopping list items
            invalidatesTags: [{ type: 'ShoppingList', id: 'LIST' }],
        }),
        // update
        updateShoppingListItem: build.mutation({
            query: ({ _id, name, quantity }) => ({
                url: `api/shopping/update/${_id}`,
                method: 'PATCH',
                body: {
                    name,
                    quantity
                }
            }),
            //after update, refetch shopping list items
            invalidatesTags: (result, error, arg) => [{ type: 'ShoppingList', id: arg._id }],
        }),
        // delete
        deleteShoppingListItem: build.mutation({
            query: (id) => ({
                url: `api/shopping/delete/${id}`,
                method: 'DELETE'
            }),
            //after delete, refetch shopping list items
            invalidatesTags: (result, error, arg) => [{ type: 'ShoppingList', id: arg }],
        }),
    })
});

export const { useFetchShoppingListItemsQuery, useAddShoppingListItemMutation, useUpdateShoppingListItemMutation, useDeleteShoppingListItemMutation } = shoppingListApi;