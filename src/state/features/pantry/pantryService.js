import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = process.env.REACT_APP_API_URL;

export const pantryApi = createApi({
    reducerPath: 'pantryApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().pantry.userToken;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
                return headers;
            }
        }
    }),
    tagTypes: ['Pantry'],
    endpoints: (build) => ({
        fetchPantryItems: build.query({
            query: () => ({
                url: 'api/pantry',
                method: 'GET'
            }),
            providesTags: (result) => {
                const data = result.data.ingredients;
                return data
                    ? [...data.map(({ _id }) => ({ type: 'Pantry', id: _id })), { type: 'Pantry', id: 'LIST' }]
                    : [{ type: 'Pantry', id: 'LIST' }];
            }
        }),
        // add
        addPantryItem: build.mutation({
            query: ({ name, quantity, expiryDate, category }) => ({
                url: 'api/pantry/add',
                method: 'POST',
                body: {
                    name,
                    quantity,
                    expiryDate,
                    category
                }
            }),
            //after add, refetch pantry items
            invalidatesTags: [{ type: 'Pantry', id: 'LIST' }],
        }),
        // update
        updatePantryItem: build.mutation({
            query: ({ _id, name, quantity, expiryDate, category }) => ({
                url: `api/pantry/update/${_id}`,
                method: 'PATCH',
                body: {
                    name,
                    quantity,
                    expiryDate,
                    category
                }
            }),
            //after update, refetch pantry items
            invalidatesTags: (result, error, arg) => [{ type: 'Pantry', id: arg._id }],
        }),
        // delete
        deletePantryItem: build.mutation({
            query: (id) => ({
                url: `api/pantry/delete/${id}`,
                method: 'DELETE'
            }),
            //after delete, refetch pantry items
            invalidatesTags: (result, error, arg) => [{ type: 'Pantry', id: arg }],
        }),
    }),
});

export const { useFetchPantryItemsQuery, useAddPantryItemMutation, useUpdatePantryItemMutation, useDeletePantryItemMutation } = pantryApi;