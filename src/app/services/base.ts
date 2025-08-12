import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { CoinResponse } from "../@types/services";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/",
    }),
    tagTypes: ["Coins"],
    endpoints: (builder) => ({
        listCoins: builder.query({
            query: () => "/coins",
        }),
    }),
});

export const { useListCoinsQuery } = baseApi;
