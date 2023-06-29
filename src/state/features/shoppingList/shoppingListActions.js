import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = process.env.REACT_APP_API_URL

export const addShoppingListItem = createAsyncThunk(
    'user/addShoppingListItem',
    async ({ name, quantity, unit }, { rejectWithValue, getState }) => {
        try {
            const token = getState().userToken || localStorage.getItem('userToken')
            const response = await axios.post(`${backendURL}api/shopping/add`, {
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

export const deleteShoppingListItem = createAsyncThunk(
    'user/deleteShoppingListItem',
    async ({ id }, { rejectWithValue, getState }) => {
        try {
            const { token } = getState().userToken || localStorage.getItem('userToken')
            const response = await axios.delete(`${backendURL}api/shopping/delete/${id}`, {
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

export const updateShoppingListItem = createAsyncThunk(
    'user/updateShoppingListItem',
    async ({ id, name, quantity, unit }, { rejectWithValue, getState }) => {
        try {
            const { token } = getState().userToken || localStorage.getItem('userToken')
            const response = await axios.patch(`${backendURL}api/shopping/update/${id}`, {
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
