import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = process.env.REACT_APP_API_URL

export const searchRecipesByIngredients = createAsyncThunk(
    'search/searchRecipesByIngredients',
    async ({ ingredients }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${backendURL}api/recipes/findByIngredients`, {
                params: {
                    ingredients
                }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const searchRecipesByQuery = createAsyncThunk(
    'search/searchRecipesByQuery',
    async ({ query }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${backendURL}api/recipes/search`, {
                params: {
                    query
                }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const fetchRecipeById = createAsyncThunk(
    'search/fetchRecipeById',
    async ({ id }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${backendURL}api/recipes/${id}`)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

