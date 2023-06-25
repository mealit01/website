import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = process.env.REACT_APP_API_URL

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ name, email, password, passwordConfirm }, { rejectWithValue }) => {
    try {
      const [firstName, lastName] = name.split(' ')
      const response = await axios.post(`${backendURL}api/user/signup`, {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm
      })
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${backendURL}api/user/login`, {
        email,
        password
      })
      localStorage.setItem('userToken', response.data.token)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
)
 

export const updateUserDetails = createAsyncThunk(
  'auth/updateUserDetails',
  async ({ name, email }, { rejectWithValue, getState }) => {
    //get token from state
    const { token } = getState().auth || localStorage.getItem('userToken')
    try {
      const response = await axios.patch(`${backendURL}api/user/updateMe`, {
        name,
        email
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response.data
    }
    catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
)

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async ({ email }, { rejectWithValue }) => {
    try {
      console.log(email);
      const response = await axios.post(`${backendURL}api/user/forgetPassword`, {
        email
      })
      console.log(response.data);
      return response.data
    }
    catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
)

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ password, passwordConfirm, token }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${backendURL}api/user/resetPassword/${token}`, {
        password,
        passwordConfirm
      })
      return response.data
    }
    catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
)

export const deleteAccount = createAsyncThunk(
  'auth/deleteAccount',
  async (_, { rejectWithValue, getState }) => {
    try{
      //get token from state
      const { token } = getState().auth || localStorage.getItem('userToken')
      const response = await axios.delete(`${backendURL}api/user/deleteMe`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      localStorage.removeItem('userToken')
      return response.data
    }
    catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
)
