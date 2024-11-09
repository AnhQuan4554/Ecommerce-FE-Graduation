import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const USERS_URL = import.meta.env.VITE_USERS_URL;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => {
        return {
          url: `${USERS_URL}`,
          method: "POST",
          body: data,
        };
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  userApi;
