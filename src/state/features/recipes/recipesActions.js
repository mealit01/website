import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export const fetchRecipeById = createAsyncThunk(
    'recipes/fetchRecipeById',
    async (id) => {
        //add user token if exists
        const response = localStorage.getItem('userToken') ?
            await axios.get(`${baseUrl}api/recipes/getRecipe/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('userToken')}`
                }
            }) :
            await axios.get(`${baseUrl}api/recipes/getRecipe/${id}`);

        console.log(response.data);
        return response.data;
    }
);

export const fetchMoreRecipes = createAsyncThunk(
    'recipes/fetchMoreRecipes',
    async (page) => {
        const response = await axios.get(`${baseUrl}api/recipes?page=${page}&limit=10`);
        return response.data;
    }
);

export const fetchRecipesBySearch = createAsyncThunk(
    'recipes/fetchRecipesBySearch',
    async (search) => {
        const response = await axios.get(`${baseUrl}api/recipes/search?search=${search}`);
        return response.data;
    }
);