import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API_URL;

export const plannerApi = createApi({
    reducerPath: 'plannerApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.userToken;
            if(token){
                headers.set('authorization', `Bearer ${token}`);
                return headers;
            }
        }
    }),
    tagTypes: ['Planner'],
    endpoints: (builder) => ({
        getPlannerDays: builder.query({
            query: () => 'api/planner/getPlannerDays',
            providesTags: ['Planner']
        }),
        addBreakfast: builder.mutation({    
            query: ({day, recipeId}) => ({
                url: `api/planner/breakfast/${day}/${recipeId}`,
                method: 'PATCH'
            }),
            invalidatesTags: ['Planner']
        }),
        addLunch: builder.mutation({
            query: ({day, recipeId}) => ({
                url: `api/planner/lunch/${day}/${recipeId}`,
                method: 'PATCH'
            }),
            invalidatesTags: ['Planner']
        }),
        addDinner: builder.mutation({
            query: ({day, recipeId}) => ({
                url: `api/planner/dinner/${day}/${recipeId}`,
                method: 'PATCH'
            }),
            invalidatesTags: ['Planner']
        }),
        removeBreakfast: builder.mutation({
            query: ({day, recipeId}) => ({
                url: `api/planner/breakfast/${day}/${recipeId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Planner']
        }),
        removeLunch: builder.mutation({
            query: ({day, recipeId}) => ({
                url: `api/planner/lunch/${day}/${recipeId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Planner']
        }),
        removeDinner: builder.mutation({
            query: ({day, recipeId}) => ({
                url: `api/planner/dinner/${day}/${recipeId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Planner']
        }),
    })
});

export const {
    useGetPlannerDaysQuery,
    useAddBreakfastMutation,
    useAddLunchMutation,
    useAddDinnerMutation,
    useRemoveBreakfastMutation,
    useRemoveLunchMutation,
    useRemoveDinnerMutation
} = plannerApi;
