import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = process.env.REACT_APP_API_URL

export const addPantryItem = createAsyncThunk(
    'user/addPantryItem',
    async ({ name, quantity, unit }, { rejectWithValue, getState }) => {
        try {
            const { token } = getState().userToken || localStorage.getItem('userToken')
            const response = await axios.post(`${backendURL}api/pantry/add`, {
                name,
                quantity,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const deletePantryItem = createAsyncThunk(
    'user/deletePantryItem',
    async ({ id }, { rejectWithValue, getState }) => {
        try {
            const { token } = getState().userToken || localStorage.getItem('userToken')
            const response = await axios.delete(`${backendURL}api/pantry/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const updatePantryItem = createAsyncThunk(
    'user/updatePantryItem',
    async ({ id, name, quantity, unit }, { rejectWithValue, getState }) => {
        try {
            const { token } = getState().userToken || localStorage.getItem('userToken')
            const response = await axios.patch(`${backendURL}api/pantry/update/${id}`, {
                name,
                quantity,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)
