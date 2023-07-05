import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = process.env.REACT_APP_API_URL;

export const searchRecipes = createAsyncThunk(
    'recipes/searchRecipes',
    async ( search, {getState}) => {
        const token = getState().auth.userToken || localStorage.getItem('userToken');
        try{
            const response = await axios.get(`${baseUrl}api/recipes?name=${search}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        }
        catch(error){
            return error.response.data.message;
        }
    }
);