import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const url = 'https://mealit.vercel.app/api/';

export const signup = createAsyncThunk(
    'user/signup',
    async ({ name, email, password, passwordConfirm }, { rejectWithValue }) => {
        try {
            const firstName = name.split(' ')[0];
            const lastName = name.split(' ')[1];

            const response = await axios.post(`${url}user/signup`, {
                firstName,
                lastName,
                email,
                password,
                passwordConfirm,
            }, {
                headers: {
                    'Content-Type': 'application/json',

                },
            });
            return response.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            }
            return rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${url}user/login`, {
                email,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            localStorage.setItem('userToken', data.token);
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            }
            return rejectWithValue(error.message);
        }
    }
);