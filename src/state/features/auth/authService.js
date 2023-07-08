import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_API_URL

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken || localStorage.getItem('userToken')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
        return headers
      }
    },
  }),
  endpoints: (build) => ({
    getUserDetails: build.query({
      query: () => ({
        url: 'api/user/info',
        method: 'GET',
      }),
    }),
    logoutUser: build.mutation({
      query: () => ({
        url: 'api/user/logout',
        method: 'POST',
      }),
    }),
    changePassword: build.mutation({
      query: ({ currentPassword, password, passwordConfirm }) => ({
        url: 'api/user/updatePassword',
        method: 'PATCH',
        body: {
          currentPassword,
          password,
          passwordConfirm
        }
      }),
    }),
  })
})

// export react hook
export const { useGetUserDetailsQuery, useLogoutUserMutation, useChangePasswordMutation } = authApi