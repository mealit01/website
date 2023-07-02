import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;
export const fetchRecipeById = createAsyncThunk(
    'recipes/fetchRecipeById',
    async (id) => {
        const response = await axios.get(`${baseUrl}api/recipes/getRecipe/${id}`);
        console.log(response.data);
        return response.data;
    }
);