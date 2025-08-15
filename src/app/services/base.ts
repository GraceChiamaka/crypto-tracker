import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/",
    }),
    tagTypes: ["Utils", "Auth"],
    endpoints: (builder) => ({
        listCoins: builder.query({
            query: () => "/coins",
        }),
        getCurrencies: builder.query({
            query: () => "/utils/currency",
        }),
    }),
});

export const { useListCoinsQuery, useGetCurrenciesQuery } = baseApi;
