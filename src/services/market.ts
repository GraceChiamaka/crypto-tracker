import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoinsByMarketDataProps } from "./types";

const API_URL =
    import.meta.env.VITE_APP_ENV === "development"
        ? import.meta.env.VITE_APP_CG_API_URL
        : import.meta.env.VITE_APP_PROD_CG_API_URL;
const key = import.meta.env.VITE_APP_CG_API_KEY;

export const marketApiSlice = createApi({
    reducerPath: "marketApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers, { getState }) => {
            headers.set("x-cg-demo-api-key", key);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCoinsByMarketCap: builder.query<CoinsByMarketDataProps[], void>({
            query: () => "coins/markets?vs_currency=usd",
        }),
    }),
});

export const { useGetCoinsByMarketCapQuery } = marketApiSlice;
