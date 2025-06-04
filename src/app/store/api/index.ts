// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "../../api/auth/route.ts" }),
    endpoints: (build) => ({
        postLoginUser: build.query<any, string>({
            query: (name) => `pokemon/${name}`,
        }),
    }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useLazyPostLoginUserQuery } = authApi;
